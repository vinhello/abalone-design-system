import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Card } from "../../components/ui/card";

export function DialogsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Dialogs"
        description="Modal windows that require user interaction. Fully accessible with keyboard navigation and focus management."
      />

      <DocSection
        title="Basic Dialog"
        description="Simple dialog with header, content, and action buttons."
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button>OPEN DIALOG</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>CONFIRM ACTION</DialogTitle>
                <DialogDescription>
                  Are you sure you want to proceed with this operation?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">CANCEL</Button>
                <Button>CONFIRM</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>OPEN DIALOG</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>CONFIRM ACTION</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">CANCEL</Button>
      <Button>CONFIRM</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        usage={`import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        {/* Content */}
      </DialogContent>
    </Dialog>
  );
}`}
      />

      <DocSection
        title="Dialog with Form"
        description="Dialog containing form inputs for data entry."
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button>ADD USER</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>CREATE NEW USER</DialogTitle>
                <DialogDescription>
                  Enter user details to create a new account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="username">USERNAME</Label>
                  <Input id="username" placeholder="user@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">ROLE</Label>
                  <Input id="role" placeholder="Administrator" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">EMAIL</Label>
                  <Input id="email" type="email" placeholder="user@domain.com" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">CANCEL</Button>
                <Button>CREATE USER</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button>ADD USER</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>CREATE NEW USER</DialogTitle>
      <DialogDescription>
        Enter user details to create a new account.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="username">USERNAME</Label>
        <Input id="username" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">EMAIL</Label>
        <Input id="email" type="email" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline">CANCEL</Button>
      <Button>CREATE USER</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      <DocSection
        title="Destructive Dialog"
        description="Confirmation dialog for dangerous actions."
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">DELETE USER</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>DELETE USER ACCOUNT</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the user account 
                  and remove all associated data from the system.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 border-2 border-destructive p-4">
                <p className="text-sm font-mono">user42@domain.com</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Last login: 2 hours ago
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">CANCEL</Button>
                <Button variant="destructive">DELETE PERMANENTLY</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">DELETE USER</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>DELETE USER ACCOUNT</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4 border-2 border-destructive p-4">
      <p className="font-mono">user42@domain.com</p>
    </div>
    <DialogFooter>
      <Button variant="outline">CANCEL</Button>
      <Button variant="destructive">DELETE</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      <DocSection
        title="Controlled Dialog"
        description="Dialog with controlled open state for programmatic control."
        preview={
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button onClick={() => setOpen(true)}>OPEN CONTROLLED DIALOG</Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                CLOSE FROM OUTSIDE
              </Button>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>CONTROLLED DIALOG</DialogTitle>
                  <DialogDescription>
                    This dialog's open state is controlled externally.
                  </DialogDescription>
                </DialogHeader>
                <p className="text-sm py-4">
                  You can close this dialog by clicking the cancel button, the X button, 
                  the overlay, or the "CLOSE FROM OUTSIDE" button above.
                </p>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    CANCEL
                  </Button>
                  <Button onClick={() => setOpen(false)}>OK</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>OPEN</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>CONTROLLED DIALOG</DialogTitle>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>CLOSE</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
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
                  <span>Use dialogs sparingly for truly important interruptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide clear, descriptive titles that explain the purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Always offer a clear way to dismiss or cancel (X button, Cancel, ESC key)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Limit dialog content to what's absolutely necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use destructive styling for dangerous actions that can't be undone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Auto-focus the first interactive element or primary action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Return focus to the trigger element when dialog closes</span>
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
                  <span>Use dialogs for non-critical information (use alerts or toasts instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Stack multiple dialogs on top of each other</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make dialogs too large or fill the entire screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Prevent users from closing dialogs (trap them)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use vague button labels like "OK" or "Submit" without context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Open dialogs automatically without user interaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Include complex forms with many fields in dialogs</span>
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
                Dialogs use role="dialog" and proper ARIA attributes for screen readers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Focus is automatically trapped within the dialog when open
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                ESC key closes the dialog and returns focus to the trigger element
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Background content is inert and cannot be interacted with while dialog is open
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Dialog titles and descriptions are properly announced to screen readers
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}