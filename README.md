# Jet's Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features dark/light mode theming, smooth animations, and showcases projects in AI, games, and developer tools.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Multi-Page Layout** - Home, Projects, and About pages with React Router
- **Project Showcase** - Display projects with tags, descriptions, and live links
- **Social Links** - Quick access to LinkedIn, GitHub, and email contact
- **Optimized Assets** - WebP images for fast loading performance

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| Styling | Vanilla CSS |
| Image Optimization | Sharp |

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── assets/          # Source assets
│   ├── components/      # Reusable UI components (Sidebar, ThemeToggle)
│   ├── data/            # Project data and content
│   ├── pages/           # Page components (Home, Projects, About)
│   ├── sections/        # Section components (Hero, Projects, Footer)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── scripts/             # Build and optimization scripts
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
    title: 'Project Name',
    description: 'A brief description of the project.',
    tags: ['Tool'],           // Category tag
    displayTags: ['AI', 'Web'], // Technology tags shown on card
    link: 'https://project-url.com',
    image: '/project-image.webp'
}
```

### Updating Personal Info

- **Hero Section**: Edit `src/sections/HeroSection.jsx`
- **About Page**: Edit `src/pages/AboutPage.jsx`
- **Social Links**: Edit `src/components/Sidebar.jsx`

## 📦 Deployment

Build the production bundle:

```bash
npm run build
```

The `dist/` folder contains the optimized static files ready for deployment to any hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 👤 Author

**Nyee Wen Jet**

- Master of Engineering Science, UTAR (2020)
- AI Engineer | Full-Stack Developer
- Specializing in Deep Learning & Computer Vision

## 📄 License

This project is private and not open for distribution.

---

*Built with ❤️ using React + Vite*
