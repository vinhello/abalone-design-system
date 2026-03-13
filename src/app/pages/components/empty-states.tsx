import { DocSection, PageHeader } from "../../components/doc-section";
import { EmptyState } from "../../components/ui/empty-state";
import { Card } from "../../components/ui/card";
import { 
  Inbox, 
  FileQuestion, 
  Search, 
  Database,
  Users,
  Settings,
} from "lucide-react";

export function EmptyStatesPage() {
  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Empty states"
        description="Guide users when content is unavailable with helpful empty state messages."
      />

      <DocSection
        title="Basic Empty State"
        description="A simple empty state with icon and message."
      >
        <EmptyState
          icon={Inbox}
          title="No items found"
          description="There are no items to display at this time."
        />
      </DocSection>

      <DocSection
        title="With Action Button"
        description="Encourage users to take action with a primary CTA."
      >
        <EmptyState
          icon={Users}
          title="No users yet"
          description="Get started by adding your first user to the system."
          action={{
            label: "Add User",
            onClick: () => alert("Add user clicked"),
          }}
        />
      </DocSection>

      <DocSection
        title="Search Results"
        description="Empty state for search with no results."
      >
        <EmptyState
          icon={Search}
          title="No results found"
          description="Try adjusting your search terms or filters to find what you're looking for."
        />
      </DocSection>

      <DocSection
        title="Data Not Available"
        description="When data hasn't been populated yet."
      >
        <EmptyState
          icon={Database}
          title="No data available"
          description="Data will appear here once the system starts collecting metrics."
          action={{
            label: "Configure Data Source",
            onClick: () => alert("Configure clicked"),
          }}
        />
      </DocSection>

      <DocSection
        title="Different Icons"
        description="Use contextually appropriate icons for different scenarios."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmptyState
            icon={FileQuestion}
            title="File not found"
            description="The file you're looking for doesn't exist."
          />
          <EmptyState
            icon={Settings}
            title="Not configured"
            description="This feature hasn't been set up yet."
            action={{
              label: "Configure Now",
              onClick: () => {},
            }}
          />
        </div>
      </DocSection>

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
                  <span>Use clear, friendly language that explains why content is empty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide actionable next steps when appropriate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Choose icons that relate directly to the missing content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep descriptions concise but informative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use empty states to educate users about features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Match the tone to your application's voice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Test empty states with real users to ensure clarity</span>
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
                  <span>Use technical jargon or error codes in empty state messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Leave empty spaces without any explanation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use generic icons that don't provide context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Write lengthy paragraphs - keep it scannable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Blame users for the empty state (e.g., "You haven't added...")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use error styling for empty states (they're not errors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Provide action buttons that lead nowhere or aren't functional</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Use Cases */}
        <Card className="p-6">
          <h3 className="mb-4">Common Use Cases</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">First-time use</h4>
              <p className="text-muted-foreground">
                When a user first accesses a feature with no data, guide them to get started.
                Example: "No dashboards yet. Create your first dashboard to start monitoring metrics."
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Search with no results</h4>
              <p className="text-muted-foreground">
                Help users refine their search or understand why no results were found.
                Example: "No results for 'analytics'. Try different keywords or check your filters."
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Filtered view with no matches</h4>
              <p className="text-muted-foreground">
                Explain that filters are too restrictive and suggest adjusting them.
                Example: "No servers match your current filters. Try adjusting your filter criteria."
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Temporary empty state</h4>
              <p className="text-muted-foreground">
                When data is being loaded or processed but isn't ready yet.
                Example: "Data is being processed. Check back in a few minutes."
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Permission-based empty state</h4>
              <p className="text-muted-foreground">
                When content exists but user doesn't have access.
                Example: "You don't have permission to view this content. Contact your administrator."
              </p>
            </div>
          </div>
        </Card>

        {/* Accessibility */}
        <Card className="p-6 bg-info/5 border-info">
          <h3 className="mb-4">Accessibility Considerations</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Icons are decorative and supplementary - the text must be self-explanatory
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Action buttons should have clear, descriptive labels
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Ensure sufficient color contrast for all text elements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Empty states should be keyboard navigable if they contain actions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Use semantic HTML structure for proper screen reader interpretation
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}