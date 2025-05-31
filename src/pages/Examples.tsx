
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Code2, Rocket, Palette, Layout, Smartphone } from "lucide-react";

const exampleProjects = [
  {
    title: "Dashboard Template",
    description: "Complete admin dashboard with charts, tables, and responsive design",
    image: "/placeholder.svg",
    tags: ["Dashboard", "Charts", "Tables"],
    demoUrl: "#",
    codeUrl: "#",
    icon: Layout
  },
  {
    title: "E-commerce Store",
    description: "Modern e-commerce interface with product catalog and shopping cart",
    image: "/placeholder.svg",
    tags: ["E-commerce", "Shopping", "Product"],
    demoUrl: "#",
    codeUrl: "#",
    icon: Smartphone
  },
  {
    title: "Landing Page",
    description: "Professional landing page with animations and call-to-action sections",
    image: "/placeholder.svg",
    tags: ["Landing", "Marketing", "Animation"],
    demoUrl: "#",
    codeUrl: "#",
    icon: Rocket
  },
  {
    title: "Portfolio Site",
    description: "Creative portfolio showcase with project galleries and contact forms",
    image: "/placeholder.svg",
    tags: ["Portfolio", "Gallery", "Contact"],
    demoUrl: "#",
    codeUrl: "#",
    icon: Palette
  }
];

const Examples = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="outline" className="border-border text-foreground">
            Code Examples
          </Badge>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Examples
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Real-world examples and templates built with Nexus UI components.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {exampleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-border group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </div>
                
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="bg-foreground text-background rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="space-y-4 max-w-2xl mx-auto">
          <Code2 className="w-12 h-12 mx-auto text-background" />
          <h3 className="text-2xl font-bold">Want to contribute an example?</h3>
          <p className="text-background/80">
            Have you built something amazing with Nexus UI? Share it with the community!
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Submit Your Example
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Examples;
