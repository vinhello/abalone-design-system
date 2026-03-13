import { Progress } from "../../components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { DocSection, PageHeader } from "../../components/doc-section";

export function ProgressPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Progress"
        description="Visual indicators for showing completion status of operations and tasks."
      />

      <DocSection
        title="Basic Progress"
        description="Simple progress bars at different completion levels."
        preview={
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>PROGRESS: 25%</span>
              </div>
              <Progress value={25} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>PROGRESS: 50%</span>
              </div>
              <Progress value={50} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>PROGRESS: 75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>PROGRESS: 100%</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        }
        code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
        usage={`import { Progress } from "./components/ui/progress";

function MyComponent() {
  const [progress, setProgress] = useState(0);
  
  return <Progress value={progress} />;
}`}
        props={[
          {
            name: "value",
            type: "number",
            description: "Progress value from 0 to 100",
          },
          {
            name: "max",
            type: "number",
            default: "100",
            description: "Maximum value",
          },
        ]}
      />

      <DocSection
        title="System Operation Progress"
        description="Progress indicators for various system operations."
        preview={
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">BACKUP IN PROGRESS</CardTitle>
                <CardDescription>Backing up system configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Progress value={67} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1.6 GB / 2.4 GB</span>
                  <span>67%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">SECURITY SCAN</CardTitle>
                <CardDescription>Scanning for vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Progress value={42} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>527 / 1,247 FILES SCANNED</span>
                  <span>42%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">LOG ANALYSIS</CardTitle>
                <CardDescription>Processing security logs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Progress value={89} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>89,432 / 100,000 ENTRIES</span>
                  <span>89%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>BACKUP IN PROGRESS</CardTitle>
    <CardDescription>Backing up system configuration</CardDescription>
  </CardHeader>
  <CardContent className="space-y-2">
    <Progress value={67} />
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>1.6 GB / 2.4 GB</span>
      <span>67%</span>
    </div>
  </CardContent>
</Card>`}
      />

      <DocSection
        title="Multi-Step Progress"
        description="Showing progress through multiple steps of a process."
        preview={
          <Card>
            <CardHeader>
              <CardTitle>DEPLOYMENT PIPELINE</CardTitle>
              <CardDescription>Step 3 of 4</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>STEP 1: BUILD</span>
                  <span className="text-success">COMPLETE</span>
                </div>
                <Progress value={100} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>STEP 2: TEST</span>
                  <span className="text-success">COMPLETE</span>
                </div>
                <Progress value={100} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>STEP 3: SECURITY SCAN</span>
                  <span className="text-info">IN PROGRESS (73%)</span>
                </div>
                <Progress value={73} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>STEP 4: DEPLOY</span>
                  <span className="text-muted-foreground">PENDING</span>
                </div>
                <Progress value={0} />
              </div>
            </CardContent>
          </Card>
        }
        code={`<div className="space-y-4">
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span>STEP 1: BUILD</span>
      <span>COMPLETE</span>
    </div>
    <Progress value={100} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span>STEP 2: TEST</span>
      <span>IN PROGRESS (73%)</span>
    </div>
    <Progress value={73} />
  </div>
  <div className="space-y-2">
    <div className="flex justify-between text-xs">
      <span>STEP 3: DEPLOY</span>
      <span>PENDING</span>
    </div>
    <Progress value={0} />
  </div>
</div>`}
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
                  <span>Show percentage or completion ratio alongside the progress bar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide context about what is progressing (e.g., "Uploading file...")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Update progress indicators in real-time when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use indeterminate states for unknown duration tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Include estimated time remaining for long operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Allow users to cancel or pause long-running operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide success confirmation when progress reaches 100%</span>
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
                  <span>Show a progress bar without any context or label</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Leave progress bars at 99% for extended periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use progress bars for instant operations (under 1 second)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make progress bars move backwards (decreasing values)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Block the entire interface during background operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use multiple simultaneous progress bars in the same context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Provide false progress indicators that don't reflect actual status</span>
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
                Progress bars use role="progressbar" with aria-valuenow, aria-valuemin, and aria-valuemax
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Progress labels are associated with aria-labelledby or aria-label
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Screen readers announce progress updates when values change significantly
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Progress bar colors meet WCAG 2.2 AA contrast requirements against backgrounds
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Text indicators provide redundant information for users who can't see the bar
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}