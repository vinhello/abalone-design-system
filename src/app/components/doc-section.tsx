import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface DocSectionProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  usage?: string;
  props?: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
  }>;
}

export function DocSection({
  title,
  description,
  preview,
  code,
  usage,
  props,
}: DocSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview">
          <TabsList className="w-full">
            <TabsTrigger value="preview" className="flex-1">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex-1">
              Code
            </TabsTrigger>
            {usage && (
              <TabsTrigger value="usage" className="flex-1">
                Usage
              </TabsTrigger>
            )}
            {props && (
              <TabsTrigger value="props" className="flex-1">
                Props
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="preview" className="border border-border rounded-lg p-6 mt-4 bg-background">
            {preview}
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-xs border border-border">
              <code>{code}</code>
            </pre>
          </TabsContent>
          {usage && (
            <TabsContent value="usage" className="mt-4">
              <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-xs border border-border">
                <code>{usage}</code>
              </pre>
            </TabsContent>
          )}
          {props && (
            <TabsContent value="props" className="mt-4">
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="text-left p-3 uppercase text-xs font-semibold">Prop</th>
                      <th className="text-left p-3 uppercase text-xs font-semibold">Type</th>
                      <th className="text-left p-3 uppercase text-xs font-semibold">Default</th>
                      <th className="text-left p-3 uppercase text-xs font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.map((prop, i) => (
                      <tr key={prop.name} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="p-3 font-mono text-xs font-medium">{prop.name}</td>
                        <td className="p-3 font-mono text-xs text-info">{prop.type}</td>
                        <td className="p-3 font-mono text-xs">{prop.default || "-"}</td>
                        <td className="p-3 text-xs">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 pb-6 border-b-2 border-border/50">
      <h1 className="mb-2">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}