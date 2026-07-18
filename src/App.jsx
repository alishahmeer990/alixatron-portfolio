import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Github, 
  Youtube, 
  Mail, 
  ExternalLink, 
  Server, 
  Bot, 
  Code, 
  Users,
  Gamepad2,
  Wrench,
  Zap
} from 'lucide-react'
import './App.css'

function App() {
  const [skillProgress, setSkillProgress] = useState({})

  useEffect(() => {
    // Animate skill progress bars on load
    const skills = {
      'minecraft-server': 95,
      'skript-plugins': 90,
      'discord-bots': 75,
      'server-admin': 85,
      'community': 85
    }
    
    setTimeout(() => {
      setSkillProgress(skills)
    }, 500)
  }, [])

  const projects = [
    {
      id: 1,
      title: "TropicalSMP",
      category: "Minecraft Server",
      description: "a Minecraft server still stuck in old style configurations, configurated and developed with full dedication.",
      technologies: ["Spigot", "Skript", "MySQL", "WorldGuard"],
      difficulty: "Hard",
      features: ["Custom Economy", "Anti-Grief", "Player Markets", "Custom Enchants"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "MineForest Chapter 2",
      category: "Minecraft Server",
      description: "An Old Server coming back after a long time, Configurated Everything and Created Custom Scripts",
      technologies: ["Skript", "Koths", "Fancy Holograms"],
      difficulty: "Hard",
      features: ["Multiple Game Modes", "Tournament System", "Leaderboards", "Rewards"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "MineFuzz Lifesteal",
      category: "Minecraft Server",
      description: "Minecraft server of my own, built it with precision and dedication. Players loved the battlepass feature",
      technologies: ["Skript", "Discord Integration", "Daily Koths", "Precise Config Editing"],
      difficulty: "Hard",
      features: ["Chat Bridge", "Server Status", "Auto Moderation", "Player Stats"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Zenith Lifesteal V1",
      category: "Lifesteal Setup",
      description: "A meticulously crafted Lifesteal setup built with precision, vibrant colors, and immersive design to deliver a polished, competitive, and unforgettable gameplay experience.",
      technologies: ["Skript", "FancyNPCs", "AxKoth", "AxAuctions", "Vibrant Colours"],
      difficulty: "Hard",
      features: ["Skript", "FancyNPCs", "AxKoth", "AxAuctions", "Vibrant Colours"],
      github: "#",
      demo: "#"
    }
  ]

  const skills = [
    { name: "Minecraft Server Configuration", level: skillProgress['minecraft-server'] || 0, icon: Server },
    { name: "Skript Plugin Development", level: skillProgress['skript-plugins'] || 0, icon: Code },
    { name: "Discord Bot Development", level: skillProgress['discord-bots'] || 0, icon: Bot },
    { name: "Server Administration", level: skillProgress['server-admin'] || 0, icon: Wrench },
    { name: "Community Management", level: skillProgress['community'] || 0, icon: Users }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Hard': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b-2 border-border z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary">CEW</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
            <Button className="minecraft-button">
              <Youtube className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 bg-gradient-to-b from-background to-card">
        <div className="container-custom text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-primary rounded-none border-4 border-primary-foreground/20 flex items-center justify-center">
              <Gamepad2 className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            CEW
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground">
            Minecraft Developer & Server Architect
          </h2>
          <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences one block at a time. Specializing in server configuration, 
            custom plugin development, and community building in the Minecraft universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} className="minecraft-button">
              View Projects
            </Button>
            <Button variant="outline" className="minecraft-button bg-secondary text-secondary-foreground">
              <Youtube className="w-4 h-4 mr-2" />
              Watch Tutorials
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About the Builder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="minecraft-card">
              <p className="text-lg mb-6 text-card-foreground leading-relaxed">
                Hi, I am Alixatron, a young minecraft developer, I am currently 14 Years Old. 
                I am into minecraft configuration since 2023, I have an experience of 3+ Years
                in Configuration, GUI Creation and Much More!
              </p>
              <p className="text-lg mb-6 text-card-foreground leading-relaxed">
                My expertise lies in my all-rounder skills, I work on many types of servers
                Hub Setups, Lifesteal Setups and Much more. I also integrate minecraft plugins
                to a discord server!
              </p>
              <p className="text-lg text-card-foreground leading-relaxed">
                Beyond Minecraft, I bridge communities through Discord bot development, creating seamless integrations 
                that keep players connected even when they're not in-game. Every project I undertake is driven by 
                the goal of fostering engaging, inclusive communities where players can create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Expertise & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={index} className="minecraft-card">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-card-foreground">{skill.name}</h3>
                  </div>
                  <div className="minecraft-progress">
                    <div 
                      className="minecraft-progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right mt-2 text-sm text-muted-foreground">
                    Level {skill.level}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Featured Builds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="minecraft-card group">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${getDifficultyColor(project.difficulty)}`} 
                       title={`Difficulty: ${project.difficulty}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-card-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-card-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-card-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="text-xs bg-primary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Button size="sm" className="minecraft-button flex-1 text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="minecraft-button flex-1 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Watch & Learn</h2>
          <div className="minecraft-card max-w-2xl mx-auto">
            <Youtube className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Cew's Dev Tutorials</h3>
            <p className="text-card-foreground/80 mb-6">
              Join me on YouTube where I share tutorials, server showcases, and development insights. 
              Learn how to create your own plugins, configure servers, and build amazing Minecraft experiences.
            </p>
            <Button className="minecraft-button">
              <Youtube className="w-4 h-4 mr-2" />
              Visit Channel
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Let's Build Together</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="minecraft-card">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span className="text-card-foreground">cew.dev@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Bot className="w-5 h-5 text-primary mr-3" />
                    <span className="text-card-foreground">Cew#1234</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-primary mr-3" />
                    <span className="text-card-foreground">github.com/cew-dev</span>
                  </div>
                  <div className="flex items-center">
                    <Youtube className="w-5 h-5 text-primary mr-3" />
                    <span className="text-card-foreground">Cew's Dev Channel</span>
                  </div>
                </div>
              </div>
              
              <div className="minecraft-card">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Ready to Collaborate?</h3>
                <p className="text-card-foreground/80 mb-6">
                  Whether you need a custom server setup, unique plugins, or Discord bot integration, 
                  I'm here to help bring your vision to life. Let's craft something amazing together!
                </p>
                <Button className="minecraft-button w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-border py-8">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            © 2026 Alixatron. Built with ❤️ and lots of redstone.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

