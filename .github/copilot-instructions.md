# Copilot Development Guide

## Project Overview
This is a next-generation 3D portfolio website featuring interactive elements, animations, and a premium user experience.

## Tech Stack
- Next.js 15+ (App Router)
- React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- TypeScript for type safety

## Directory Structure
```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── 3d/          # 3D scene components
│   └── sections/    # Page sections
└── lib/             # Utility functions
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Key Features to Enhance

1. **3D Scene** - Enhance ParticleScene with more interactive effects
2. **Animations** - Add scroll-triggered animations
3. **Projects** - Connect with GitHub API to auto-populate projects
4. **Contact Form** - Integrate with email service (Resend, SendGrid, etc.)
5. **Analytics** - Add Google Analytics or similar

## Common Tasks

### Add a New Section
1. Create a new file in `src/components/sections/`
2. Export a React component
3. Import and add to `src/app/page.tsx`

### Update Skills
Edit `src/components/sections/Skills.tsx` and modify the `skillCategories` array.

### Add Projects
Edit `src/components/sections/Projects.tsx` and add to the `projects` array.

### Customize Colors
Global colors are defined in `tailwind.config.ts`. Modify the theme colors to match your brand.

## Performance Tips
- Use dynamic imports for heavy components
- Optimize images before adding to public/
- Monitor bundle size with `npm run build -- --analyze`
- Use Lighthouse in Chrome DevTools for performance audits

## Deployment

### To Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### To Other Platforms
```bash
npm run build
# Use the .next folder for deployment
```

## Troubleshooting

### 3D Scene not rendering
- Check browser console for WebGL errors
- Ensure Three.js is properly installed
- Test in a different browser

### Animations not smooth
- Check for JavaScript errors
- Reduce animation complexity
- Monitor performance with React DevTools Profiler

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check for TypeScript errors: `npm run build`
