import { config, isRealApiKey } from './config';

// Meilisearch configuration
const MEILISEARCH_HOST = config.meilisearch.host;
const MEILISEARCH_API_KEY = config.meilisearch.apiKey;
const INDEX_NAME = config.meilisearch.indexName;

// Create simplified search client for SpicyDonut backend
const createSearchClient = () => ({
  search(requests) {
    const request = requests[0];
    const query = request.params.query || '';
    const facetFilters = request.params.facetFilters || [];
    const page = request.params.page || 0;
    const hitsPerPage = request.params.hitsPerPage || 9;

    // Parse sorting from index name
    const [indexName, ...sortParts] = request.indexName.split(':');
    const sort = sortParts.length ? sortParts.join(':') : null;

    // Convert facet filters to simple format
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

    // Simple facets - only type and brand
    const facets = ['type', 'brand'];

    const url = new URL(`${MEILISEARCH_HOST}/search`);
    url.searchParams.set('q', query);
    if (filters) url.searchParams.set('filters', filters);
    url.searchParams.set('facets', facets.join(','));
    url.searchParams.set('attributesToHighlight', ['name'].join(','));
    url.searchParams.set('offset', page * hitsPerPage);
    url.searchParams.set('limit', hitsPerPage);
    url.searchParams.set('index', indexName);
    if (sort) url.searchParams.set('sort', sort);

    return fetch(url.toString(), {
      headers: {
        'x-api-key': MEILISEARCH_API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error('Search API error:', res.status, res.statusText);
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        return {
          results: [{
            hits: (data.hits || []).map((hit, index) => {
              // Simplified highlight result
              const highlightResult = {};
              if (hit._formatted && hit._formatted.name) {
                highlightResult.name = { value: hit._formatted.name };
              }

              const id = hit.id || `fallback-id-${index}`;
              if (!hit.id) {
                console.warn(`Hit at index ${index} is missing an ID. Query: ${query}`, hit);
              }

              return {
                id: id,
                objectID: id,
                name: hit.name,
                brand: hit.brand,
                image: hit.image,
                price: hit.price,
                type: hit.type,
                _highlightResult: highlightResult
              };
            }),
            nbHits: data.nbHits || 0,
            facets: data.facetDistribution || {},
            page,
            nbPages: Math.ceil((data.nbHits || 0) / hitsPerPage),
            hitsPerPage,
            processingTimeMS: data.processingTimeMS || 0,
            query,
            exhaustiveNbHits: true
          }]
        };
      })
      .catch(error => {
        console.error('Search error:', error);
        return {
          results: [{
            hits: [],
            nbHits: 0,
            facets: {},
            page: 0,
            nbPages: 0,
            hitsPerPage: 9,
            processingTimeMS: 0,
            query,
            exhaustiveNbHits: true
          }]
        };
      });
  }
});

// Export simplified search client
export const searchClient = createSearchClient();

// Search configuration
export const getSearchConfig = (language = 'en') => ({
  indexName: INDEX_NAME,
  searchClient,
  future: { preserveSharedStateOnUnmount: true }
});

// Simplified translations
export const searchTranslations = {
  en: {
    searchPlaceholder: "Search products...",
    noResults: "No results found",
    searching: "Searching...",
    results: "results",
    result: "result",
    showMore: "Show more",
    filters: "Filters",
    clearFilters: "Clear filters",
    relevance: "Relevance",
    poweredBy: "Powered by SpicyDonut AI"
  },
  ar: {
    searchPlaceholder: "البحث عن المنتجات...",
    noResults: "لم يتم العثور على نتائج",
    searching: "جاري البحث...",
    results: "نتائج",
    result: "نتيجة",
    showMore: "عرض المزيد",
    filters: "المرشحات",
    clearFilters: "مسح المرشحات",
    relevance: "الصلة",
    poweredBy: "مدعوم بواسطة SpicyDonut AI"
  }
}; 