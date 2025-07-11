
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, ExternalLink, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const FeatureItem = ({ icon: Icon, title, description, delay }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div 
    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent/10 transition-colors"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="p-2 bg-primary/10 rounded-lg">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  </motion.div>
);

export const DiscordWidget = () => {
  const features = [
    {
      icon: Users,
      title: "Active Community",
      description: "Connect with developers and share knowledge"
    },
    {
      icon: MessageCircle,
      title: "Real-time Support",
      description: "Get quick responses from our team"
    },
    {
      icon: Code,
      title: "Code Together",
      description: "Collaborate on projects and share code snippets"
    },
    {
      icon: Zap,
      title: "Stay Updated",
      description: "Be the first to know about new features"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl border">
        <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Join Our Developer Community</h2>
                  <p className="text-background/90 mt-1">Connect, collaborate, and grow with fellow developers</p>
                </div>
              </div>
              <Button 
                size="lg"
                variant="secondary"
                className="hover:bg-background/90 transition-all group"
                onClick={() => window.open(siteConfig.discord.inviteUrl, '_blank')}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Join Now
                <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
              </Button>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-foreground">Why join us?</h3>
                  <p className="text-muted-foreground">
                    Be part of a growing community of passionate developers, designers, and tech enthusiasts.
                  </p>
                </motion.div>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <FeatureItem 
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      delay={0.3 + index * 0.1}
                    />
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="pt-2"
                >
                  <Button 
                    variant="outline"
                    className="w-full bg-background"
                    onClick={() => window.open(siteConfig.discord.inviteUrl, '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join our Discord
                  </Button>
                </motion.div>
              </div>
              
              {/* Discord Preview */}
              <motion.div 
                className="hidden md:block relative h-full min-h-[400px] rounded-xl overflow-hidden border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Join our Discord</h4>
                    <p className="text-sm text-muted-foreground mb-6">Connect with our growing community of developers</p>
                    <Button 
                      variant="outline"
                      className="bg-background"
                      onClick={() => window.open(siteConfig.discord.inviteUrl, '_blank')}
                    >
                      Open in Discord
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </div>
    </motion.div>
  );
};
