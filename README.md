# Dhruv Sengar - Next-Generation 3D Portfolio

A premium, futuristic interactive 3D portfolio website built with cutting-edge technologies.

## 🚀 Features

- **3D Hero Section** - Immersive particle scene with mouse-follow effects
- **Interactive Navigation** - Smooth scrolling with glassmorphic navbar
- **Animated Sections** - Framer Motion powered transitions and micro-interactions
- **Responsive Design** - Mobile-optimized with simplified 3D for performance
- **Premium UI** - Dark theme with glassmorphism and neon glow effects
- **Project Showcase** - Interactive expandable project cards
- **Contact Form** - Beautiful form with validation
- **Smooth Animations** - Page scroll animations and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Math Utilities**: Maath

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolioweb
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/
│   │   └── ParticleScene.tsx   # 3D particle effects
│   └── sections/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Skills.tsx      # Skills showcase
│       ├── Projects.tsx    # Projects section
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
└── lib/
    └── cn.ts              # Utility functions
```

## 🎨 Customization

### Update Personal Information
Edit the following sections:

- **Hero**: `src/components/sections/Hero.tsx`
  - Change name and tagline
  - Modify CTA buttons

- **About**: `src/components/sections/About.tsx`
  - Update personal description
  - Modify highlights

- **Skills**: `src/components/sections/Skills.tsx`
  - Add/remove skills
  - Update categories

- **Projects**: `src/components/sections/Projects.tsx`
  - Add/edit projects
  - Update project descriptions

- **Contact**: `src/components/sections/Contact.tsx`
  - Update social links
  - Configure email service

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your portfolio will be live!

### Build for Production

```bash
npm run build
npm start
```

## ⚡ Performance Optimization

- 3D components are dynamically imported to reduce initial bundle size
- Images are optimized with Next.js Image component
- CSS is minified and optimized with Tailwind
- Smooth scroll behavior doesn't impact CLS (Cumulative Layout Shift)

## 🎯 SEO

The site includes:
- Proper meta tags for social sharing
- Semantic HTML structure
- Open Graph tags
- Fast page load times
- Mobile-friendly design

## 📝 Configuration

### Environment Variables

Create a `.env.local` file if you need external services:

```env
# Example: Email service
NEXT_PUBLIC_FORM_ENDPOINT=https://api.example.com/contact
```

## 🔧 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

For questions or feedback, reach out through the contact form on the portfolio itself.

---

Built with ❤️ by Dhruv Sengar
