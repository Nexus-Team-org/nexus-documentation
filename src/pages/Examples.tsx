
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Code2, ArrowRight, Star, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

const exampleProjects = [
  {
    title: "Dashboard Template",
    description: "Complete admin dashboard with charts, tables, and responsive design",
    image: "/placeholder.svg",
    tags: ["Dashboard", "Charts", "Tables"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true
  },
  {
    title: "E-commerce Store",
    description: "Modern e-commerce interface with product catalog and shopping cart",
    image: "/placeholder.svg",
    tags: ["E-commerce", "Shopping", "Product"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Landing Page",
    description: "Professional landing page with animations and call-to-action sections",
    image: "/placeholder.svg",
    tags: ["Landing", "Marketing", "Animation"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Portfolio Site",
    description: "Creative portfolio showcase with project galleries and contact forms",
    image: "/placeholder.svg",
    tags: ["Portfolio", "Gallery", "Contact"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Blog Platform",
    description: "Modern blog with markdown support, categories, and search functionality",
    image: "/placeholder.svg",
    tags: ["Blog", "CMS", "Markdown"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Task Manager",
    description: "Productivity app with drag-and-drop interface and team collaboration",
    image: "/placeholder.svg",
    tags: ["Productivity", "Tasks", "Team"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

const Examples = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredProjects = activeFilter === "all" 
    ? exampleProjects 
    : exampleProjects.filter(project => project.tags.includes(activeFilter));

  const allTags = Array.from(new Set(exampleProjects.flatMap(project => project.tags)));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-block mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Badge variant="default" className="bg-black text-white dark:bg-white dark:text-black text-sm px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 mr-2" />
            Showcase
          </Badge>
        </motion.span>
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Built with Nexus UI
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discover real-world examples and templates built with Nexus UI components.
          Everything you need to kickstart your next project.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mt-8 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            className="rounded-full px-4"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              className="rounded-full px-4"
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 border-border group hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-muted/50 relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        className="w-full bg-white text-black hover:bg-white/90"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Preview
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex-1 p-6 flex flex-col">
                  <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-foreground group"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Button>
                    {project.featured && (
                      <div className="flex items-center text-xs text-amber-500">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Trending
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        className="mt-24 bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Code2 className="w-12 h-12 mx-auto text-white mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Showcase Your Work</h3>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Have you built something amazing with Nexus UI? Share it with our community 
            and get featured in our gallery of examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Submit Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/20 px-8 py-6 text-base text-foreground"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Examples;
