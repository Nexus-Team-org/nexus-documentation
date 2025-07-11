
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentViewer } from "@/components/ComponentViewer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileSidebar } from "@/components/MobileSidebar";

const Components = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  // Build meta map from site config for status/description
  const componentsMeta = Object.fromEntries(
    siteConfig.navigation.components.map((c) => [c.href.split("/").pop()!, c])
  ) as Record<string, { title: string; description: string; status: string; href: string }>;

  // --- Component registry with detailed demos (extendable)
  const componentsRegistry = {
    button: {
      title: "Button",
      description: "A collection of button components with various styles and states. Use buttons to trigger actions and navigate through your application with professional styling.",
      code: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className=\"flex flex-wrap gap-4\">\n      <Button variant=\"default\">Default</Button>\n      <Button variant=\"secondary\">Secondary</Button>\n      <Button variant=\"outline\">Outline</Button>\n      <Button variant=\"ghost\">Ghost</Button>\n      <Button variant=\"destructive\">Destructive</Button>\n    </div>\n  );
}`,
      usage: `import { Button } from "@/components/ui/button";

<Button>Click me</Button>`,
      preview: (
        <div className="flex flex-wrap gap-4 p-8">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      ),
    },
    // add more detailed component demos here
  } as const;

  const currentKey = (slug ?? "button").toLowerCase();
  const detailed = (componentsRegistry as Record<string, any>)[currentKey];
  const meta = componentsMeta[currentKey];

  if (!meta) {
    navigate("/components/button", { replace: true });
    return null;
  }

  const activeComponent = detailed ?? {
    title: meta.title,
    description: meta.description,
    code: `// Demo code for ${meta.title} coming soon`,
    usage: undefined,
    preview: (
      <div className="p-8 text-muted-foreground text-sm">Preview for {meta.title} coming soon.</div>
    ),
  };

  if (!activeComponent) {
    navigate("/components/button", { replace: true });
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block">
        <ComponentSidebar />
      </div>
      
      <div className="flex-1 p-6 lg:p-8 overflow-hidden">
        <div className="lg:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="h-full overflow-y-auto">
                <MobileSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ComponentViewer
            title={activeComponent.title}
            description={activeComponent.description}
            code={activeComponent.code}
            usage={activeComponent.usage}
          >
            {activeComponent.preview}
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
                        className="w-full"
                        disabled={component.status !== "ready"}
                        onClick={() => navigate(component.href.replace('/components/','/components/'))}
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
