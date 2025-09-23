# 🤖 AI Agents Website

A modern, professional AI startup website built with Next.js 15, featuring dark/light mode, particle animations, and comprehensive service pages for AI agents.

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (Check with `node --version`)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saitejareddi3636/Personal-Agent-Local-.git
   cd agent-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Features

### ✨ **Modern AI Startup Design**
- **Particle Background**: Custom floating particles with connecting lines
- **Dark/Light Mode**: Professional theme switching with persistent storage
- **Glass Morphism**: Translucent components with backdrop blur effects
- **Responsive Design**: Mobile-first approach for all devices

### 📄 **Complete Page Structure**
- **Homepage**: Hero, testimonials, pain points, industries, features, roadmap, FAQ
- **Service Pages**: Dedicated pages for each AI agent type
- **Pricing Page**: Three-tier animated pricing cards
- **Blog System**: Index page + individual post routing
- **Navigation**: Mobile-responsive with theme toggle

### 🎨 **Advanced Animations**
- **Framer Motion**: Smooth page transitions and hover effects
- **Fade Animations**: Sections animate in as you scroll
- **Interactive Elements**: Hover effects and micro-interactions
- **Timeline Animation**: Expandable roadmap with phase details

### 🤖 **AI Agent Services**
1. **AI Customer Support** - 24/7 intelligent customer service
2. **AI Receptionist** - Professional phone handling and booking
3. **Personal AI Assistant** - Daily life management and personalization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Poppins from Google Fonts
- **Icons**: Lucide React for consistent iconography
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
agent-website/
├── src/
│   ├── app/
│   │   ├── blog/                 # Blog system
│   │   ├── pricing/              # Pricing page
│   │   ├── services/             # Service pages
│   │   │   ├── customer-support/ # AI Customer Support
│   │   │   ├── receptionist/     # AI Receptionist
│   │   │   └── assistant/        # Personal AI Assistant
│   │   ├── contact/              # Contact page
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   ├── navbar.tsx            # Navigation
│   │   ├── Footer.tsx            # Footer component
│   │   ├── ThemeProvider.tsx     # Theme management
│   │   ├── ParticlesBackground.tsx # Particle animation
│   │   └── globals.css           # Global styles
│   └── components/
│       ├── FadeIn.tsx            # Animation wrapper
│       ├── RoadmapTimeline.tsx   # Interactive roadmap
│       └── FAQAccordion.tsx      # Expandable FAQ
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎨 Color Palette

- **Electric Cyan**: `#00E7FF` - Primary accent
- **Cyber Purple**: `#8A0A8A` - Secondary accent
- **Neon Red**: `#FF4D4D` - Alert/CTA color
- **Aurora Blue**: `#005B96` - Professional blue
- **Accent Yellow**: `#FFD700` - Highlight color

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔧 Customization

### Adding New Service Pages
1. Create folder in `src/app/services/[service-name]/`
2. Add `page.tsx` with your content
3. Update navbar dropdown in `src/app/navbar.tsx`

### Modifying Colors
Edit `tailwind.config.js` to add or change colors:
```javascript
colors: {
  yourColor: "#HEXCODE",
}
```

### Adding Animations
Use the `FadeIn` component for consistent animations:
```jsx
import FadeIn from "../components/FadeIn";

<FadeIn delay={0.2}>
  <YourComponent />
</FadeIn>
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Traditional Hosting
1. Build: `npm run build`
2. Upload `out` folder to your web server

## 🐛 Troubleshooting

### Node.js Version Issues
```bash
# Check version
node --version

# Install Node 18+ if needed
# Visit: https://nodejs.org
```

### Hydration Errors
- Clear browser cache
- Restart development server
- Check console for specific errors

### Animation Issues
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility

## 📞 Support

### Common Issues
1. **Port 3000 in use**: Change port with `npm run dev -- -p 3001`
2. **Missing dependencies**: Run `npm install` again
3. **Build errors**: Check Node.js version (need 18+)

### Getting Help
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Framer Motion [Animation Guide](https://www.framer.com/motion/)

## 🎉 What You'll See

### Homepage Features
- ✅ Animated particle background
- ✅ Dark/light mode toggle
- ✅ Smooth scroll animations
- ✅ Interactive testimonials
- ✅ Pain points for SMB audience
- ✅ Industry-specific sections
- ✅ Interactive roadmap timeline
- ✅ Expandable FAQ accordion

### Service Pages
- ✅ **Customer Support**: Business-focused with cost savings
- ✅ **Receptionist**: Industry-specific (restaurants, clinics, etc.)
- ✅ **Personal Assistant**: Detailed personalization features

### Professional Elements
- ✅ Glass morphism effects
- ✅ Gradient backgrounds
- ✅ Professional typography
- ✅ Mobile-responsive design
- ✅ Loading animations
- ✅ Hover effects throughout

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ and AI** • [Live Demo](https://your-domain.com) • [Report Issues](https://github.com/saitejareddi3636/Personal-Agent-Local-/issues)
