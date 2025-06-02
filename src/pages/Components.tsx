
import { motion } from "framer-motion";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentViewer } from "@/components/ComponentViewer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const Components = () => {
  const buttonCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`;

  const buttonUsage = `import { Button } from "@/components/ui/button";

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="outline">Outline Button</Button>
<Button variant="secondary">Secondary Button</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <Icon className="w-4 h-4 mr-2" />
  Button with icon
</Button>`;

  return (
    <div className="flex min-h-screen -mx-4 sm:-mx-6 lg:-mx-8">
      <ComponentSidebar />
      
      <div className="flex-1 p-6 lg:p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <ComponentViewer
            title="Button"
            description="A collection of button components with various styles and states. Use buttons to trigger actions and navigate through your application with professional styling."
            code={buttonCode}
            usage={buttonUsage}
          >
            <div className="flex flex-wrap gap-4 p-8">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </ComponentViewer>

          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">All Components</h2>
              <p className="text-muted-foreground">
                Professional UI components ready for production use
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {siteConfig.navigation.components.map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-border hover:border-foreground/20 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold">{component.title}</CardTitle>
                        <Badge 
                          variant={component.status === "ready" ? "default" : "secondary"}
                          className={component.status === "ready" 
                            ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                            : "bg-muted text-muted-foreground"
                          }
                        >
                          {component.status === "ready" ? "Ready" : "Soon"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                        {component.description}
                      </p>
                      <Button 
                        variant={component.status === "ready" ? "default" : "outline"} 
                        size="sm" 
                        className={`w-full ${component.status === "ready" ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" : ""}`}
                        disabled={component.status !== "ready"}
                      >
                        {component.status === "ready" ? "View Component" : "Coming Soon"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Components;
