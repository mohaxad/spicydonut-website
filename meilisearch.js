// SpicyLens Meilisearch Configuration

// Configuration values (these should come from environment variables)
const MEILISEARCH_HOST = process.env.NEXT_PUBLIC_MEILISEARCH_HOST || 'https://flipped.spicydonut.biz';
const MEILISEARCH_API_KEY = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY || 'your-api-key-here';
const INDEX_NAME = 'spicylens';

// Create custom search client for SpicyDonut backend
const createSpicyDonutSearchClient = () => ({
  search(requests) {
    const request = requests[0];
    const query = request.params.query || '';
    const facetFilters = request.params.facetFilters || [];
    const page = request.params.page || 0;
    const hitsPerPage = request.params.hitsPerPage || 20;

    const [indexName, ...sortParts] = request.indexName.split(':');
    const sort = sortParts.length ? sortParts.join(':') : null;

    const originalIndexNameForTracking = indexName;
    const rawFacetFiltersForTracking = request.params.facetFilters;

    const filters = facetFilters.flat().map(f => {
      if (Array.isArray(f)) {
        return `(${f.map(val => {
          const [key, value] = val.split(':');
          return `${key} = "${value}"`;
        }).join(' OR ')})`;
      } else {
        const [key, value] = f.split(':');
        return `${key} = "${value}"`;
      }
    }).join(' AND ');

    // Default facets for real SpicyLens data
    const facets = ['type', 'brand', 'colors', 'memory'];

    const url = new URL(`${MEILISEARCH_HOST}/search`);
    url.searchParams.set('q', query);

    if (filters) {
      url.searchParams.set('filters', filters);
    }
    
    url.searchParams.set('facets', facets.join(','));
    url.searchParams.set('attributesToHighlight', ['name', 'description'].join(','));
    url.searchParams.set('offset', page * hitsPerPage);
    url.searchParams.set('limit', hitsPerPage);
    url.searchParams.set('index', indexName);

    if (sort) {
      url.searchParams.set('sort', sort);
    }

    return fetch(url.toString(), {
      headers: {
        'x-api-key': MEILISEARCH_API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error('Fetch error:', res.status, res.statusText);
          return res.text().then(text => { 
            console.error('Fetch error body:', text);
            throw new Error(`HTTP error ${res.status}`); 
          });
        }
        return res.json();
      })
      .then(data => {
        const search_id_from_backend = data.search_id || data.searchId;

        return {
          results: [
            {
              hits: (data.hits || []).map((hit, hitIndex) => {
                const transformedHighlightResult = {};
                if (hit._formatted) {
                  for (const key in hit._formatted) {
                    if (Object.prototype.hasOwnProperty.call(hit._formatted, key)) {
                      transformedHighlightResult[key] = { value: hit._formatted[key] };
                    }
                  }
                }

                return {
                  ...hit,
                  objectID: hit.id || hit.objectID || hit.slug || `hit_${indexName}_${hitIndex}_${(hit.name || '').slice(0, 5)}`,
                  _highlightResult: transformedHighlightResult,
                };
              }),
              nbHits: data.nbHits || 0,
              facets: data.facetDistribution || {},
              page,
              nbPages: Math.ceil((data.nbHits || 0) / hitsPerPage),
              hitsPerPage,
              processingTimeMS: data.processingTimeMS || 0,
              query,
              params: request.params ? JSON.stringify(request.params) : '',
              exhaustiveNbHits: data.exhaustiveNbHits !== undefined ? data.exhaustiveNbHits : true,
              search_id: search_id_from_backend || `search_id_${indexName}_${query.slice(0, 10)}_${page}`,
              indexNameForTracking: originalIndexNameForTracking,
              appliedFiltersForTracking: rawFacetFiltersForTracking,
            }
          ]
        };
      })
      .catch(error => {
        console.error('Error in searchClient:', error);
        const originalRequest = requests && requests[0];
        const queryFromRequest = (originalRequest && originalRequest.params && originalRequest.params.query) || '';
        const baseIndexNameFromRequest = (originalRequest && originalRequest.indexName) ? originalRequest.indexName.split(':')[0] : 'unknown_index';
        const facetFiltersFromRequest = (originalRequest && originalRequest.params && originalRequest.params.facetFilters) || null;

        return {
          results: [{
            hits: [],
            nbHits: 0,
            facets: {},
            page: 0,
            nbPages: 0,
            hitsPerPage: 20,
            processingTimeMS: 0,
            query: queryFromRequest,
            params: originalRequest && originalRequest.params ? JSON.stringify(originalRequest.params) : '',
            exhaustiveNbHits: true,
            search_id: `error_search_id_${baseIndexNameFromRequest}_${queryFromRequest.slice(0, 10)}`,
            indexNameForTracking: baseIndexNameFromRequest,
            appliedFiltersForTracking: facetFiltersFromRequest,
          }]
        };
      });
  }
});

// Create InstantSearch client for React InstantSearch
export const searchClient = createSpicyDonutSearchClient();

export default searchClient; 