# Cew's Minecraft Developer Portfolio

A professional portfolio website for Minecraft developer Cew, showcasing expertise in server configuration, Skript plugin development, and Discord bot creation. The site features a beautiful Minecraft-themed design that balances gaming aesthetics with professional presentation.

## 🌐 Live Demo

**[View Live Website](https://ayjpaecp.manus.space)**

## ✨ Features

### 🎮 Minecraft-Themed Design
- Authentic Minecraft color palette (grass green, dirt brown, pumpkin orange)
- Blocky, pixelated aesthetic that maintains professionalism
- Custom UI components with Minecraft-style shadows and hover effects
- Progress bars designed like Minecraft experience bars

### 📱 Responsive Design
- Mobile-first approach ensuring perfect display on all devices
- Grid-based layouts reflecting Minecraft's blocky nature
- Touch-friendly navigation and interactions
- Optimized performance across different screen sizes

### 🎯 Professional Content
- **Hero Section**: Engaging introduction with clear value proposition
- **About Section**: Professional narrative with subtle gaming references
- **Skills Section**: Visual representation of technical expertise levels
- **Projects Section**: Detailed showcase of 6 major projects
- **YouTube Integration**: Dedicated section for tutorial content
- **Contact Section**: Clear contact information and collaboration CTA

### ⚡ Interactive Elements
- Smooth scrolling navigation between sections
- Animated skill progress bars that fill on page load
- Hover effects and micro-interactions
- Professional button styling with Minecraft aesthetics

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cew-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
cew-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and theme
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── components.json        # shadcn/ui configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # This file
```

## 🎨 Design System

### Color Palette
The website uses an authentic Minecraft-inspired color scheme:

- **Background**: `#2d5016` (Dark grass green)
- **Primary**: `#ff8c00` (Pumpkin orange)
- **Secondary**: `#8b4513` (Dirt brown)
- **Accent**: `#4169e1` (Water blue)
- **Text**: `#f5f5dc` (Cream/beige)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold, uppercase for buttons and titles
- **Body Text**: Clean, readable with good contrast

### Custom Components
- **minecraft-button**: Blocky buttons with shadow effects
- **minecraft-card**: Project cards with hover animations
- **minecraft-progress**: Experience bar-style progress indicators

## 📊 Content Sections

### Skills Showcase
- **Minecraft Server Configuration** (Level 95)
- **Skript Plugin Development** (Level 90)
- **Discord Bot Development** (Level 85)
- **Server Administration** (Level 88)
- **Community Management** (Level 75)

### Featured Projects
1. **SurvivalCraft Network** - Custom survival server with economy systems
2. **MiniGame Hub** - Comprehensive mini-game system with tournaments
3. **ServerSync Bot** - Discord-Minecraft chat bridge with moderation
4. **RPG Quest System** - Immersive quest system with branching storylines
5. **Community Manager Bot** - Automated Discord community management
6. **Economy Plus** - Advanced multi-currency economy plugin

## 🔧 Customization

### Updating Content
- Edit `src/App.jsx` to modify content, projects, and personal information
- Update the `projects` array to add/remove/modify project showcases
- Modify the `skills` array to adjust skill levels and categories

### Styling Changes
- Primary theme colors are defined in `src/App.css` CSS variables
- Custom component styles are in the `@layer components` section
- Tailwind classes can be modified throughout the JSX components

### Adding New Sections
1. Add the new section JSX to `src/App.jsx`
2. Update the navigation array to include the new section
3. Add corresponding styles in `src/App.css` if needed

## 🌟 Key Features Explained

### Smooth Navigation
The website implements smooth scrolling navigation using the `scrollIntoView` API, providing seamless transitions between sections.

### Animated Progress Bars
Skill levels are displayed using animated progress bars that fill gradually when the page loads, creating an engaging visual effect.

### Responsive Grid Layout
Projects are displayed in a responsive grid that adapts from 1 column on mobile to 3 columns on desktop, ensuring optimal viewing on all devices.

### Professional Gaming Balance
The design successfully balances gaming aesthetics with professional presentation, using subtle Minecraft references in both visual design and copywriting.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 About Cew

Cew is a passionate Minecraft developer specializing in:
- **Server Configuration**: Scalable server architecture for hundreds of players
- **Skript Plugin Development**: Custom mechanics and unique gameplay features
- **Discord Bot Development**: Community integration and automated moderation
- **Community Building**: Creating engaging, inclusive gaming communities

## 📞 Contact

- **Email**: cew.dev@example.com
- **Discord**: Cew#1234
- **GitHub**: github.com/cew-dev
- **YouTube**: Cew's Dev Channel

---

*Built with ❤️ and lots of redstone.*
