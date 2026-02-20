# Project 100 Minds - Landing Page

A modern, space-themed landing page for Project 100 Minds | Cohort I (2026) - An initiative by DEV Community Nepal.

## Features

- 🚀 **Static Site Generation (SSG)** - Optimized for fast loading and deployment
- 🎨 **Modern Space Theme** - Beautiful glassmorphism effects and animations
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Performance Optimized** - Static export for maximum speed
- 🎯 **SEO Ready** - Proper meta tags and Open Graph images

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D space scene animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (required for Next.js 16)
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build static site
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## Deployment

### Static Export (Recommended)

This site is configured for static site generation (SSG). After building, deploy the `out/` directory to any static hosting service:

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

#### GitHub Pages
```bash
# Build the site
npm run build

# Deploy the out directory to gh-pages branch
# (Use GitHub Actions or manual deployment)
```

#### Other Static Hosts
- Upload the contents of the `out/` directory to your hosting service
- Ensure your server is configured to serve `index.html` for all routes (SPA routing)

### Deployment Platforms

- **Vercel** - Zero-config deployment (recommended)
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Fast global CDN
- **AWS S3 + CloudFront** - Enterprise solution

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── code-of-conduct/      # Code of Conduct page
│   ├── application-categories/ # Application Categories page
│   └── selection-criteria/   # Selection Criteria page
├── components/               # React components
├── public/                   # Static assets
└── out/                      # Static export output (generated)
```

## Pages

- **Home** (`/`) - Hero section, About, Program Pillars, Founder's Message
- **Code of Conduct** (`/code-of-conduct/`) - Governance and ethics framework
- **Application Categories** (`/application-categories/`) - Application information
- **Selection Criteria** (`/selection-criteria/`) - Selection philosophy and criteria

## Configuration

### Static Export Settings

The site is configured for static export in `next.config.mjs`:
- `output: 'export'` - Enables static site generation
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Ensures proper routing

## Performance

- All pages are statically generated at build time
- No server-side rendering required
- Optimized images and assets
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for DEV Community Nepal - Project 100 Minds initiative.

## Contact

For questions or support, contact: project100minds@devcommunitynepal.org
