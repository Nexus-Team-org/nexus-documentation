
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Palette, Code, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { DiscordWidget } from "@/components/DiscordWidget";
import { siteConfig } from "@/config/site";

const iconMap = {
  Zap,
  Shield,
  Palette,
  Code
};

const Index = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-8 py-12 lg:py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4">
              ✨ Professional Component Library
            </Badge>
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground">
              {siteConfig.logo} {siteConfig.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {siteConfig.description}
            </p>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/getting-started">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="group">
            <Download className="mr-2 w-4 h-4" />
            Install Now
          </Button>
        </motion.div>

        {/* Installation Command */}
        <motion.div
          className="bg-muted rounded-lg p-4 text-left max-w-md mx-auto mx-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <code className="text-sm font-mono text-foreground">
            npx create-nexus-init my-project
          </code>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {siteConfig.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 bg-card rounded-lg border border-border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Features */}
      <motion.section
        className="space-y-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose {siteConfig.name}?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built with modern technologies and best practices to help you create amazing user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {siteConfig.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-foreground" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Discord Widget Section */}
      <motion.section
        className="space-y-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with other developers, get support, and stay updated with the latest {siteConfig.name} news.
          </p>
        </div>
        
        <div className="flex justify-center">
          <DiscordWidget />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-foreground text-background rounded-2xl p-8 lg:p-16 text-center mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-background/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers building amazing applications with {siteConfig.name}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Read the Docs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-background/30 text-foreground hover:bg-background/20 hover:border-background/50 hover:shadow-lg transition-all duration-200"
              onClick={() => window.open(siteConfig.github.starUrl, '_blank')}
            >
              <Star className="mr-2 w-4 h-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
