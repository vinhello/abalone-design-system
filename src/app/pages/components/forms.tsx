import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Switch } from "../../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { DocSection, PageHeader } from "../../components/doc-section";

export function FormsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Forms"
        description="Complete form examples combining inputs, labels, and other form controls with proper validation and accessibility."
      />

      <DocSection
        title="Login Form"
        description="Basic authentication form with email and password."
        preview={
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>SYSTEM LOGIN</CardTitle>
              <CardDescription>Enter your credentials to access the system</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">EMAIL</Label>
                  <Input id="login-email" type="email" placeholder="admin@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">PASSWORD</Label>
                  <Input id="login-password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-xs cursor-pointer">
                    REMEMBER ME
                  </Label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">FORGOT PASSWORD</Button>
              <Button>LOGIN</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>SYSTEM LOGIN</CardTitle>
  </CardHeader>
  <CardContent>
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">EMAIL</Label>
        <Input id="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">PASSWORD</Label>
        <Input id="password" type="password" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">REMEMBER ME</Label>
      </div>
    </form>
  </CardContent>
  <CardFooter>
    <Button>LOGIN</Button>
  </CardFooter>
</Card>`}
      />

      <DocSection
        title="Settings Form"
        description="Form with various input types and controls."
        preview={
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>SECURITY SETTINGS</CardTitle>
              <CardDescription>Configure your security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">SESSION TIMEOUT (MINUTES)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="log-level">LOG LEVEL</Label>
                <Select defaultValue="info">
                  <SelectTrigger id="log-level">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debug">DEBUG</SelectItem>
                    <SelectItem value="info">INFO</SelectItem>
                    <SelectItem value="warning">WARNING</SelectItem>
                    <SelectItem value="error">ERROR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 border-2 border-border p-4">
                <h4 className="text-sm tracking-wide">Security options</h4>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa" className="text-xs">TWO-FACTOR AUTHENTICATION</Label>
                    <p className="text-xs text-muted-foreground">
                      Require 2FA for all login attempts
                    </p>
                  </div>
                  <Switch id="2fa" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ip-whitelist" className="text-xs">IP WHITELIST</Label>
                    <p className="text-xs text-muted-foreground">
                      Only allow access from whitelisted IPs
                    </p>
                  </div>
                  <Switch id="ip-whitelist" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="audit-log" className="text-xs">AUDIT LOGGING</Label>
                    <p className="text-xs text-muted-foreground">
                      Log all user actions for compliance
                    </p>
                  </div>
                  <Switch id="audit-log" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label>NOTIFICATION PREFERENCES</Label>
                <div className="space-y-2 border-2 border-border p-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-login" defaultChecked />
                    <Label htmlFor="notify-login" className="text-xs cursor-pointer">
                      NOTIFY ON NEW LOGIN
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-changes" defaultChecked />
                    <Label htmlFor="notify-changes" className="text-xs cursor-pointer">
                      NOTIFY ON CONFIG CHANGES
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notify-alerts" defaultChecked />
                    <Label htmlFor="notify-alerts" className="text-xs cursor-pointer">
                      NOTIFY ON SECURITY ALERTS
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">RESET TO DEFAULTS</Button>
              <Button>SAVE CHANGES</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>SECURITY SETTINGS</CardTitle>
  </CardHeader>
  <CardContent className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="timeout">SESSION TIMEOUT</Label>
      <Input id="timeout" type="number" defaultValue="30" />
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="level">LOG LEVEL</Label>
      <Select defaultValue="info">
        <SelectTrigger id="level">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="info">INFO</SelectItem>
          <SelectItem value="warning">WARNING</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="flex items-center justify-between">
      <Label htmlFor="2fa">TWO-FACTOR AUTH</Label>
      <Switch id="2fa" defaultChecked />
    </div>
  </CardContent>
  <CardFooter>
    <Button>SAVE CHANGES</Button>
  </CardFooter>
</Card>`}
      />

      {/* Dos and Don'ts */}
      <div className="mt-12 space-y-8">
        <div>
          <h2 className="mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DO */}
            <Card className="p-6 border-success">
              <div className="mb-4">
                <h3 className="text-success mb-2">✓ Do</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Always associate labels with inputs using htmlFor and id attributes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Group related form fields together visually and semantically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide clear, specific error messages next to the relevant field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use appropriate input types (email, password, number, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Indicate required fields clearly with asterisks or labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide helpful placeholder text or examples when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use descriptive button labels that indicate the action (e.g., "Save Changes")</span>
                </li>
              </ul>
            </Card>

            {/* DON'T */}
            <Card className="p-6 border-destructive">
              <div className="mb-4">
                <h3 className="text-destructive mb-2">✗ Don't</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use placeholder text as a replacement for labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Create forms with too many fields on a single page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Show generic error messages like "Invalid input"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Disable the submit button until all fields are valid (use inline validation instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use vague labels like "Data" or "Info"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Clear form data on submission error (keep user input)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use CAPTCHA or security challenges without accessibility alternatives</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Accessibility */}
        <Card className="p-6 bg-info/5 border-info">
          <h3 className="mb-4">Accessibility Considerations</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                All form inputs have associated labels using proper htmlFor/id relationships
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Error messages use aria-describedby to associate with their inputs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Forms can be fully navigated and submitted using only the keyboard
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Required fields are indicated both visually and programmatically with aria-required
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Form validation feedback meets WCAG 2.2 AA contrast requirements
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}