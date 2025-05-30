import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';

export default function Components() {
  const buttonCode = `import { Button } from "@/components/ui/button";

function Example() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`;

  const cardCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

function Example() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}`;

  const tabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Example() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Account settings form goes here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Password change form goes here.</p>
      </TabsContent>
    </Tabs>
  );
}`;

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Components"
        description="Pre-built, accessible UI components powered by Radix UI and styled with Tailwind CSS."
        gradient={true}
        centered={true}
      />
      
      <div className="container mx-auto px-4 max-w-6xl pb-24">

        <div className="space-y-16">
          {/* Button Component */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-primary/10 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="bg-primary/10 p-2 rounded-md">
                  <span className="text-primary">B</span>
                </span>
                Button
              </h2>
              <Badge variant="outline" className="bg-glass">@/components/ui/button</Badge>
            </div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 border rounded-b-lg bg-card">
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-gradient-primary hover:opacity-90">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </TabsContent>
              <TabsContent value="code" className="rounded-b-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="tsx" 
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                >
                  {buttonCode}
                </SyntaxHighlighter>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Card Component */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-primary/10 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="bg-primary/10 p-2 rounded-md">
                  <span className="text-primary">C</span>
                </span>
                Card
              </h2>
              <Badge variant="outline" className="bg-glass">@/components/ui/card</Badge>
            </div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 border rounded-b-lg bg-card">
                <Card className="w-[350px] glass-card">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-primary hover:opacity-90">Save</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="rounded-b-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="tsx" 
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                >
                  {cardCode}
                </SyntaxHighlighter>
              </TabsContent>
            </Tabs>
          </motion.section>

          {/* Tabs Component */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-primary/10 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <span className="bg-primary/10 p-2 rounded-md">
                  <span className="text-primary">T</span>
                </span>
                Tabs
              </h2>
              <Badge variant="outline" className="bg-glass">@/components/ui/tabs</Badge>
            </div>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-6 border rounded-b-lg bg-card">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="bg-primary/10">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4 bg-card/50 border border-border/50 mt-2 rounded-md">
                    <p>Account settings form goes here.</p>
                  </TabsContent>
                  <TabsContent value="password" className="p-4 bg-card/50 border border-border/50 mt-2 rounded-md">
                    <p>Password change form goes here.</p>
                  </TabsContent>
                </Tabs>
              </TabsContent>
              <TabsContent value="code" className="rounded-b-lg overflow-hidden">
                <SyntaxHighlighter 
                  language="tsx" 
                  style={vscDarkPlus}
                  customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
                >
                  {tabsCode}
                </SyntaxHighlighter>
              </TabsContent>
            </Tabs>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
