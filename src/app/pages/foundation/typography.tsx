import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { PageHeader } from "../../components/doc-section";

export function TypographyPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Typography"
        description="Monospace typography system for clarity, consistency, and nostalgic computing aesthetics."
      />

      <div className="mb-8 border-4 border-border p-6 bg-card">
        <h2 className="mb-4">Typeface</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm tracking-wide mb-2">Primary font</h3>
            <p className="text-2xl mb-2">Courier New, Consolas, monospace</p>
            <p className="text-sm text-muted-foreground">
              Monospace fonts ensure consistent character width, making tables, logs, 
              and code displays easier to read and parse. This choice evokes the era 
              of terminal interfaces and early system administration tools.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Heading styles</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="border-b-2 border-border pb-4">
              <h1>Heading 1 - 2rem (32px)</h1>
              <p className="text-xs text-muted-foreground mt-1">
                font-size: 2rem; font-weight: 600; line-height: 1.2; letter-spacing: -0.02em;
              </p>
            </div>
            <div className="border-b-2 border-border pb-4">
              <h2>Heading 2 - 1.5rem (24px)</h2>
              <p className="text-xs text-muted-foreground mt-1">
                font-size: 1.5rem; font-weight: 600; line-height: 1.3; letter-spacing: -0.01em;
              </p>
            </div>
            <div className="border-b-2 border-border pb-4">
              <h3>Heading 3 - 1.25rem (20px)</h3>
              <p className="text-xs text-muted-foreground mt-1">
                font-size: 1.25rem; font-weight: 600; line-height: 1.4;
              </p>
            </div>
            <div>
              <h4>Heading 4 - 1rem (16px)</h4>
              <p className="text-xs text-muted-foreground mt-1">
                font-size: 1rem; font-weight: 600; line-height: 1.5;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Body text</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="border-b-2 border-border pb-4">
              <p className="text-base mb-2">
                Base text - 1rem (16px) - This is the default body text size used throughout 
                the system. It provides excellent readability while maintaining the nostalgic 
                monospace aesthetic.
              </p>
              <p className="text-xs text-muted-foreground">
                font-size: 1rem (16px); font-weight: 400; line-height: 1.5;
              </p>
            </div>
            <div className="border-b-2 border-border pb-4">
              <p className="text-sm mb-2">
                Small text - 0.875rem (14px) - Used for secondary information, captions, 
                and supporting text that needs to be de-emphasized.
              </p>
              <p className="text-xs text-muted-foreground">
                font-size: 0.875rem (14px); font-weight: 400; line-height: 1.5;
              </p>
            </div>
            <div>
              <p className="text-xs mb-2">
                Extra small text - 0.75rem (12px) - Used for labels, timestamps, and minimal UI text.
              </p>
              <p className="text-xs text-muted-foreground">
                font-size: 0.75rem (12px); font-weight: 400; line-height: 1.5;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Text styles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Uppercase</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="uppercase">THIS TEXT IS UPPERCASE</p>
              <p className="text-xs text-muted-foreground">
                Used selectively for UI elements like buttons, labels, and badges to enhance the 
                retro system interface aesthetic. Headings use sentence case for readability.
              </p>
              <pre className="text-xs bg-muted p-2 border-2 border-border">
                text-transform: uppercase;
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="tracking-wide">Increased letter spacing</p>
              <p className="text-xs text-muted-foreground">
                Wide tracking (letter-spacing) improves readability of small uppercase UI elements 
                and adds to the technical aesthetic.
              </p>
              <pre className="text-xs bg-muted p-2 border-2 border-border">
                letter-spacing: 0.05em;
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Code & monospace</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="mb-2 text-sm">Inline Code</p>
              <p>
                Use <code className="bg-muted px-1.5 py-0.5 border border-border">monospace</code> for 
                inline code, file paths, and technical values.
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm">Code Blocks</p>
              <pre className="bg-muted p-4 border-2 border-border overflow-x-auto">
                <code>{`function authenticate(user, password) {
  const hash = sha256(password);
  return validateCredentials(user, hash);
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border-2 border-border p-6 bg-muted">
        <h3 className="text-sm tracking-wide mb-4">Typography guidelines</h3>
        <ul className="space-y-2 text-sm">
          <li>• Use sentence case for all headings for improved readability</li>
          <li>• Maintain consistent line-height of 1.5 for body text for optimal readability</li>
          <li>• Reserve uppercase styling for small UI elements (buttons, labels, badges)</li>
          <li>• Monospace fonts ensure alignment in tables and data displays</li>
          <li>• Avoid font size below 0.75rem (12px) for accessibility</li>
          <li>• Use font-weight: 600 for headings, 400 for body text</li>
        </ul>
      </div>
    </div>
  );
}