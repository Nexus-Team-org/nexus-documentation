
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Eye, Code } from "lucide-react";

interface ComponentViewerProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  usage?: string;
}

export const ComponentViewer = ({ title, description, children, code, usage }: ComponentViewerProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Badge>
            Component
          </Badge>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center space-x-2">
            <Code className="w-4 h-4" />
            <span>Code</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-8 rounded-b-lg border-t">
              <div className="flex items-center justify-center min-h-[200px]">
                {children}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Component Code</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(code)}
                className="flex items-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-muted text-muted-foreground p-6 rounded-lg overflow-x-auto text-sm">
                  <code>{code}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(code)}
                  className="absolute top-2 right-2"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              {usage && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-3">Usage</h4>
                  <div className="relative">
                    <pre className="bg-muted text-muted-foreground p-6 rounded-lg overflow-x-auto text-sm">
                      <code>{usage}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(usage)}
                      className="absolute top-2 right-2"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};
