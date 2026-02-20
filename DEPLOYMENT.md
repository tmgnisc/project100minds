# Deployment Guide - Project 100 Minds

## Quick Deploy Commands

### Build Static Site
```bash
npm run build
```

This will generate static files in the `out/` directory.

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Option A: Via Vercel Dashboard**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and deploy

**Option B: Via CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 2. Netlify

**Via Netlify Dashboard:**
1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Deploy

**Via Netlify CLI:**
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=out
```

### 3. GitHub Pages

**Using GitHub Actions:**
1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Push to main branch - it will auto-deploy

### 4. Cloudflare Pages

1. Push code to Git repository
2. Go to Cloudflare Dashboard → Pages
3. Create new project
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
6. Deploy

### 5. AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 6. Any Static Host

Simply upload the contents of the `out/` directory to your hosting service.

**Important:** Ensure your server is configured to:
- Serve `index.html` for all routes (for client-side routing)
- Set proper MIME types
- Enable gzip compression

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Check `out/` directory contains all files
- [ ] Test locally: `npx serve out`
- [ ] Verify all pages load correctly
- [ ] Check images and assets load
- [ ] Test responsive design
- [ ] Verify external links work
- [ ] Check meta tags and SEO

## Post-Deployment

- [ ] Test all pages on production URL
- [ ] Verify analytics tracking (if enabled)
- [ ] Check mobile responsiveness
- [ ] Test form submissions (if any)
- [ ] Verify social media previews (Open Graph)

## Troubleshooting

### Build Errors
- Ensure Node.js 20.9.0+ is installed (required for Next.js 16)
- Clear `.next` and `out` directories
- Run `npm install` again
- Check for TypeScript errors

### Routing Issues
- Ensure server is configured for SPA routing
- Check `trailingSlash: true` in config
- Verify all links use proper paths

### Image Issues
- Images are unoptimized for static export
- Ensure all images are in `public/` directory
- Check image paths are correct

## Performance Tips

- Enable gzip/brotli compression on server
- Use CDN for faster global delivery
- Enable browser caching
- Consider adding service worker for offline support
