# Tech Portfolio 2026

A modern, responsive portfolio website built with React to showcase projects, skills, and professional background. Designed for developers, recruiters, and potential clients to quickly assess capabilities and get in touch.

## Demo

🚀 **Live Demo**: [Deployment Link](https://topotopo-v2.github.io/maxine-tech-portfolio/)

### Preview
The site features intuitive navigation, and sections highlighting key projects, about information, and contact details. It's optimized for both desktop and mobile viewing.

## Features

- **Responsive Navigation**: Sticky navbar with active section tracking using custom hooks.
- **Parallax Background**: Dynamic scrolling effects for an engaging user experience.
- **Project Showcase**: Interactive cards displaying projects with media, icons, and descriptions.
- **About Section**: Personal introduction and skills overview.
- **Work With Me**: Contact form and call-to-action for collaborations.
- **Social Integration**: Links to professional profiles via reusable social icons component.
- **Modular Styling**: CSS Modules for scoped, maintainable styles.

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Language**: JavaScript (ES6+)
- **Additional Libraries**: None (kept lightweight for performance)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tech-portfolio-2026.git
   cd tech-portfolio-2026
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Starts the development server with hot reloading.
- `npm run build` - Builds the project for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint for code quality checks.

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
├── index.css               # Global styles
├── App.css                 # App-specific styles
├── ParallaxBackground.jsx  # Background component
├── useScrollPosition.js    # Custom hook for scroll tracking
├── about/
│   └── AboutSection.jsx    # About page component
├── assets/                 # Static assets (images, icons)
├── common/
│   ├── SocialIcons.jsx     # Reusable social links
│   └── SocialIcons.module.css
├── nav/
│   ├── NavigationBar.jsx   # Navigation component
│   ├── NavigationBar.module.css
│   └── useActiveSectionTracking.js  # Hook for nav highlighting
├── projects/
│   ├── ProjectCard.jsx     # Individual project display
│   ├── ProjectCard.module.css
│   ├── ProjectIcons.jsx    # Tech stack icons
│   ├── ProjectIcons.module.css
│   ├── projectIconType.jsx # Icon type definitions
│   ├── ProjectMedia.jsx    # Media handling for projects
│   ├── ProjectMedia.module.css
│   ├── projects.js         # Project data
│   └── ProjectSection.jsx  # Projects page component
└── workwithme/
    └── WorkWithMeSection.jsx  # Contact/collaboration section
```

## Design Decisions & Architecture Insights

- **Component-Based Architecture**: Leveraged React's component model for reusability, with each section (About, Projects, etc.) as a self-contained module.
- **Custom Hooks**: Implemented `useScrollPosition` and `useActiveSectionTracking` to manage scroll-based interactions without external libraries, keeping the bundle size small.
- **CSS Modules**: Used for scoped styling to avoid global CSS conflicts and improve maintainability.
- **Performance Focus**: Minimal dependencies and Vite's fast build times ensure quick load times. Parallax effects are optimized to run smoothly on modern devices.
- **Accessibility**: Basic semantic HTML and keyboard navigation support in navigation components.
- **Trade-offs**: Chose CSS Modules over styled-components for simplicity and smaller bundle size, sacrificing some dynamic styling flexibility.

## Future Improvements

- Add animations for smoother transitions.
- Integrate a backend for dynamic content management (e.g., CMS or headless API).
- Implement dark mode toggle.
- Add unit and integration tests with Jest and React Testing Library.
- Optimize images and assets for better performance.
- Expand project data with live demos and GitHub links.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Max**  

---

*Built with ❤️ using React and Vite. Feel free to fork, star, or reach out for collaborations!*