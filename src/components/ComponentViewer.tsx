
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
          <Badge variant="default" className="bg-black text-white border-black dark:bg-white dark:text-black dark:border-white">
            Component
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-100">
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
          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-white rounded-b-lg border-t border-slate-100">
              <div className="flex items-center justify-center min-h-[200px]">
                {children}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm">
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
              <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-sm">
                <code>{code}</code>
              </pre>
              {usage && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-slate-900 mb-3">Usage</h4>
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(usage)}
                      className="absolute top-2 right-2 z-10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <pre className="bg-slate-100 text-slate-800 p-6 rounded-lg overflow-x-auto text-sm">
                      <code>{usage}</code>
                    </pre>
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
