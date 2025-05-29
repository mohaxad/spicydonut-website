// SpicyDonut Configuration
export const config = {
  // Meilisearch settings
  meilisearch: {
    host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST || 'https://flipped.spicydonut.biz',
    apiKey: process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY || 'your-api-key-here',
    indexName: 'spicylens',
    timeout: 5000,
    retries: 3
  },

  // Search settings
  search: {
    hitsPerPage: 10,
    maxFacetValues: 20,
    highlightPreTag: '<mark class="bg-saudi-emerald/20 text-saudi-emerald px-1 rounded">',
    highlightPostTag: '</mark>',
    snippetEllipsisText: '…',
    enablePersonalization: true,
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_SEARCH_INSIGHTS === 'true'
  },

  // Feature flags
  features: {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableSearch: true,
    enableMultiLanguage: true,
    enableFilters: true,
    enableSortBy: true,
    enablePagination: true
  },

  // UI settings
  ui: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'ar'],
    searchDebounceMs: 300,
    animationDuration: 300,
    maxSearchResults: 100
  },

  // API endpoints
  api: {
    search: '/api/search',
    analytics: '/api/analytics',
    feedback: '/api/feedback'
  }
};

// Check if using a real API key
export const isRealApiKey = (apiKey) => {
  const invalidKeys = [
    'your-api-key-here',
    'demo-key-for-testing',
    'test-key',
    'placeholder',
    undefined,
    null,
    ''
  ];
  return apiKey && !invalidKeys.includes(apiKey) && apiKey.length > 10;
};

// Environment validation
export const validateConfig = () => {
  const errors = [];
  const warnings = [];

  if (!config.meilisearch.apiKey || !isRealApiKey(config.meilisearch.apiKey)) {
    warnings.push('NEXT_PUBLIC_MEILISEARCH_API_KEY is not set or is using a placeholder value');
  }

  if (!config.meilisearch.host) {
    errors.push('NEXT_PUBLIC_MEILISEARCH_HOST is not set');
  }

  if (warnings.length > 0 && process.env.NODE_ENV === 'development') {
    console.log(`
🌶️ SpicyLens Search Setup:

To enable real search results:
1. Create a .env.local file in your project root
2. Add your Meilisearch API key:
   NEXT_PUBLIC_MEILISEARCH_API_KEY=your-actual-api-key-from-spicydonut

3. Restart your development server

Current status:
- Host: ${config.meilisearch.host}
- Index: ${config.meilisearch.indexName}
- Mode: ${isRealApiKey(config.meilisearch.apiKey) ? 'Production' : 'Demo (Mock Data)'}

Demo mode shows sample data to demonstrate the search interface.
    `);
  }

  if (errors.length > 0) {
    console.error('🔧 Configuration errors:', errors);
  }

  return { valid: errors.length === 0, hasWarnings: warnings.length > 0 };
};

// Initialize configuration validation
if (typeof window !== 'undefined') {
  // Client-side validation
  validateConfig();
}

export default config; 