# 🌶️ SpicyDonut Company Website

A cutting-edge, AI-powered company website showcasing SpicyDonut's innovative products and services. Built with Next.js 14, featuring real-time search capabilities, stunning animations, and full Arabic/English localization.

## 🚀 Live Demo

The website is running at: `http://localhost:3000` (development)

**Key Features:**
- 🔍 **SpicyLens Real-Time Search** - Powered by Meilisearch
- 🌍 **Bilingual Support** - Arabic & English with RTL/LTR layouts
- 🎨 **Futuristic UI** - Dark theme with Saudi-inspired emerald design
- ✨ **Advanced Animations** - Framer Motion, GSAP, smooth scrolling
- 🌟 **Interactive Elements** - Starscape background, rotating glows, magnetic buttons
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - Next.js 14 with Turbopack

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | JavaScript |
| **Styling** | TailwindCSS |
| **Animations** | Framer Motion, GSAP, Lenis |
| **Search** | Meilisearch + React InstantSearch |
| **Icons** | Lucide React |
| **Fonts** | Inter + IBM Plex Sans Arabic |

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Access to Meilisearch instance at `flipped.spicydonut.biz`

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd spicydonut-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your Meilisearch API key to .env.local
echo "NEXT_PUBLIC_MEILISEARCH_API_KEY=your-actual-api-key" >> .env.local

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```bash
# Required: Meilisearch API Key
NEXT_PUBLIC_MEILISEARCH_API_KEY=your-meilisearch-api-key

# Optional: Override default settings
NEXT_PUBLIC_MEILISEARCH_HOST=https://flipped.spicydonut.biz
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_SEARCH_INSIGHTS=true
```

## 🔍 SpicyLens Search Implementation

### Overview
SpicyLens is a fully functional AI-powered search feature that connects to your Meilisearch backend at `flipped.spicydonut.biz` using the `spicylens` index.

### Features
- **Real-time Search** - Instant results as you type
- **Multilingual Support** - Arabic and English with automatic language detection
- **Advanced Filtering** - Category, tags, and custom filters
- **Smart Sorting** - Relevance, date, and custom sort options
- **Highlighted Results** - Search term highlighting in results
- **Pagination** - Efficient result pagination
- **Error Handling** - Graceful error handling with retry mechanisms

### Search Configuration

The search is configured in `/src/lib/meilisearch.js`:

```javascript
// Current configuration
const searchConfig = {
  host: 'https://flipped.spicydonut.biz',
  indexName: 'spicylens',
  features: {
    highlighting: true,
    filtering: true,
    sorting: true,
    pagination: true,
    multilingual: true
  }
};
```

### API Integration

**Backend Requirements:**
- Meilisearch instance running at `flipped.spicydonut.biz`
- Index named `spicylens` 
- Documents with fields: `title`, `description`, `category`, `tags`, `language`, `url`

**Expected Document Structure:**
```json
{
  "id": "unique-id",
  "title": "Document Title",
  "description": "Document description...",
  "category": "Technology",
  "tags": ["ai", "search", "spicydonut"],
  "language": "en",
  "url": "https://example.com/document",
  "createdAt": "2025-01-01T00:00:00Z",
  "updatedAt": "2025-01-01T00:00:00Z"
}
```

## 🎨 Design System

### Color Palette (Neo-Saudi Emerald)
```css
--blackened-kaaba: #0D0D0D     /* Background */
--saudi-emerald: #10B981       /* Primary */
--sandstone-gold: #FACC15      /* Accent */
--muted-text: #9CA3AF          /* Secondary text */
--emerald-gradient: #10B981 → #14B8A6
```

### Product-Specific Colors
- **SpicyLens**: Aqua (#22D3EE) + Purple (#D946EF)
- **AccessMind**: Cyan (#22D3EE) + Gold (#FACC15)
- **UserAura**: Magenta (#E879F9) + Dark (#1F2937)
- **FlowForge**: Blue (#60A5FA) + Emerald (#10B981)
- **CoreVault**: Gray (#6B7280) + Dark (#374151)

### Typography
- **Latin Text**: Inter font family
- **Arabic Text**: IBM Plex Sans Arabic with proper RTL support
- **Responsive sizing**: 5xl-8xl for headlines, xl-2xl for body

## 📱 Component Architecture

### Core Components
```
src/components/
├── Navigation.js           # Fixed header with mobile menu
├── HeroSection.js         # Animated hero with rotating glow
├── SpicyLensSection.js    # Real search functionality
├── AboutSection.js        # Company information
├── ProductsSection.js     # All 5 AI products showcase
├── PlatformSection.js     # Tech stack & capabilities
├── CareersSection.js      # Jobs & company culture
├── Footer.js              # Links & newsletter signup
├── StarscapeBackground.js # Animated stars & meteors
└── SpicyLensSearchResults.js # Search results with highlighting
```

### Utility Components
```
src/components/
├── MagneticButton.js      # Magnetic hover effects
├── ScrollSection.js       # Scroll-triggered animations
├── AnimatedCounter.js     # Number counting animations
└── RotatingGlowBackground.js # Rotating background effects
```

### Configuration Files
```
src/lib/
├── config.js              # Centralized configuration
├── meilisearch.js         # Search client & utilities
└── utils.js               # Animation utilities
```

## 🌐 Internationalization (i18n)

### Supported Languages
- **English (en)** - Default language, LTR layout
- **Arabic (ar)** - Full RTL support with IBM Plex Sans Arabic

### Features
- Automatic language detection
- RTL/LTR layout switching
- Localized search interface
- Date formatting per locale
- Number formatting per locale

### Adding New Languages
1. Update `searchTranslations` in `/src/lib/meilisearch.js`
2. Add language to `config.ui.supportedLanguages`
3. Update component text content
4. Add font support if needed

## 🎬 Animation Features

### Scroll Animations
- **Lenis Smooth Scroll** - Buttery smooth scrolling
- **Intersection Observer** - Trigger animations on scroll
- **Framer Motion** - Component animations
- **GSAP Integration** - Complex animation sequences

### Special Effects
- **Starscape Background** - Twinkling stars with meteor trails
- **Rotating Glows** - Multi-layer rotating background effects
- **Magnetic Buttons** - Mouse-following hover effects
- **Particle Systems** - Floating particles on hero section
- **Text Glow Effects** - Animated text shadows

## 🚀 Performance Optimizations

- **Next.js 14** with Turbopack for fast builds
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Google Fonts with display=swap
- **CSS Optimization** - TailwindCSS purging
- **Bundle Analysis** - Built-in bundle analyzer

## 📋 Deployment

### Vercel (Recommended)
```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Environment Variables for Production
```bash
NEXT_PUBLIC_MEILISEARCH_API_KEY=your-production-api-key
NEXT_PUBLIC_MEILISEARCH_HOST=https://flipped.spicydonut.biz
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Build Commands
```bash
npm run build       # Production build
npm run start       # Start production server
npm run lint        # ESLint checking
npm run dev         # Development server
```

## 🧪 Testing the Search

### Manual Testing Steps
1. **Basic Search**: Type in the search box and verify results appear
2. **Language Toggle**: Switch between English/Arabic
3. **Filters**: Test category and tag filtering
4. **Sorting**: Verify sort by relevance/date works
5. **Pagination**: Navigate through result pages
6. **Error Handling**: Test with invalid API key

### Search Analytics
When enabled, the search tracks:
- Query performance
- Click-through rates
- Popular search terms
- User engagement metrics

## 🔍 Troubleshooting

### Common Issues

**Search not working:**
- Verify `NEXT_PUBLIC_MEILISEARCH_API_KEY` is set correctly
- Check network connectivity to `flipped.spicydonut.biz`
- Ensure the `spicylens` index exists and has data

**Styling issues:**
- Clear browser cache
- Verify TailwindCSS classes are being applied
- Check for console errors

**Animation performance:**
- Reduce particle count in `StarscapeBackground.js`
- Disable animations on mobile devices
- Update GPU acceleration settings

### Debug Mode
Enable debug logging by setting:
```bash
NEXT_PUBLIC_DEBUG=true
```

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes and test locally
3. Ensure all components are responsive
4. Test both English and Arabic layouts
5. Submit pull request with description

### Code Style
- Use JavaScript (ES6+) 
- Follow consistent naming conventions
- Add JSDoc comments for complex functions
- Maintain responsive design principles
- Test accessibility features

## 📄 License

This project is proprietary to SpicyDonut. All rights reserved.

---

## 🎯 Next Steps

### Phase 2 Features
- [ ] Advanced search filters (date range, content type)
- [ ] Search suggestions and autocomplete
- [ ] User search history
- [ ] Personalized search results
- [ ] Voice search integration
- [ ] Mobile app integration

### Performance Enhancements
- [ ] Edge caching for search results
- [ ] Progressive web app (PWA) features
- [ ] Offline search capability
- [ ] Advanced loading states

---

**Built with ❤️ by the SpicyDonut team in Saudi Arabia**

*For technical support or API key requests, contact the SpicyDonut engineering team.*
