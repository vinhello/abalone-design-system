import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import { Badge } from "../../components/ui/badge";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Download } from "lucide-react";
import { Card } from "../../components/ui/card";

// Generate mock security log data
const generateLogData = (count: number) => {
  const statuses = ["SUCCESS", "FAILED", "WARNING", "BLOCKED"];
  const actions = ["LOGIN", "LOGOUT", "FILE_ACCESS", "CONFIG_CHANGE", "API_CALL"];
  const ips = ["192.168.1.101", "10.0.0.15", "172.16.0.50", "192.168.1.200"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `LOG-${String(i + 1).padStart(6, "0")}`,
    timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    user: `user${Math.floor(Math.random() * 100)}`,
    action: actions[Math.floor(Math.random() * actions.length)],
    ip: ips[Math.floor(Math.random() * ips.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

const allLogs = generateLogData(250); // Generate 250 rows for demonstration

export function TablesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const itemsPerPage = 10;
  
  const totalPages = Math.ceil(allLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLogs = allLogs.slice(startIndex, endIndex);

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAll = () => {
    if (selectedRows.size === currentLogs.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentLogs.map(log => log.id)));
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "success";
      case "FAILED":
        return "destructive";
      case "WARNING":
        return "warning";
      case "BLOCKED":
        return "outline";
      default:
        return "default";
    }
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "ellipsis", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="p-8 max-w-7xl">
      <PageHeader
        title="Tables"
        description="Data tables for displaying large datasets. Supports sorting, selection, and pagination for enterprise-scale data."
      />

      <DocSection
        title="Basic Table"
        description="Simple table with borders and alternating row colors."
        preview={
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>LOG-000001</TableCell>
                <TableCell>admin</TableCell>
                <TableCell>LOGIN</TableCell>
                <TableCell>
                  <Badge variant="success">SUCCESS</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>LOG-000002</TableCell>
                <TableCell>user42</TableCell>
                <TableCell>FILE_ACCESS</TableCell>
                <TableCell>
                  <Badge variant="destructive">FAILED</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>LOG-000003</TableCell>
                <TableCell>sysadmin</TableCell>
                <TableCell>CONFIG_CHANGE</TableCell>
                <TableCell>
                  <Badge variant="success">SUCCESS</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        }
        code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>User</TableHead>
      <TableHead>Action</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>LOG-000001</TableCell>
      <TableCell>admin</TableCell>
      <TableCell>LOGIN</TableCell>
      <TableCell>
        <Badge variant="success">SUCCESS</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        usage={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";

function MyComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Column 1</TableHead>
          <TableHead>Column 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
      />

      <DocSection
        title="Table with Selection & Pagination (250 Rows)"
        description={`Enterprise-grade table showing ${allLogs.length} security log entries with row selection and pagination. Currently showing ${selectedRows.size} selected rows.`}
        preview={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                SHOWING {startIndex + 1}-{Math.min(endIndex, allLogs.length)} OF {allLogs.length} ENTRIES
                {selectedRows.size > 0 && ` • ${selectedRows.size} SELECTED`}
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
                EXPORT
              </Button>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedRows.size === currentLogs.length && currentLogs.length > 0}
                      onCheckedChange={toggleAll}
                      aria-label="Select all"
                    />
                  </TableHead>
                  <TableHead>LOG ID</TableHead>
                  <TableHead>TIMESTAMP</TableHead>
                  <TableHead>USER</TableHead>
                  <TableHead>ACTION</TableHead>
                  <TableHead>IP ADDRESS</TableHead>
                  <TableHead>STATUS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentLogs.map((log) => (
                  <TableRow
                    key={log.id}
                    data-state={selectedRows.has(log.id) ? "selected" : undefined}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.has(log.id)}
                        onCheckedChange={() => toggleRow(log.id)}
                        aria-label={`Select ${log.id}`}
                      />
                    </TableCell>
                    <TableCell className="font-mono text-xs">{log.id}</TableCell>
                    <TableCell className="font-mono text-xs">
                      {new Date(log.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{log.user}</TableCell>
                    <TableCell className="font-mono text-xs">{log.action}</TableCell>
                    <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(log.status) as any}>
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {renderPagination().map((page, i) => (
                  <PaginationItem key={i}>
                    {page === "ellipsis" ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        onClick={() => setCurrentPage(page as number)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        }
        code={`const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);
const currentData = data.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Checkbox onCheckedChange={toggleAll} />
      </TableHead>
      {/* Other headers */}
    </TableRow>
  </TableHeader>
  <TableBody>
    {currentData.map((row) => (
      <TableRow key={row.id}>
        <TableCell>
          <Checkbox checked={selected.has(row.id)} />
        </TableCell>
        {/* Other cells */}
      </TableRow>
    ))}
  </TableBody>
</Table>

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={() => setCurrentPage(p => p - 1)} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={() => setCurrentPage(p => p + 1)} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
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
                  <span>Use clear, descriptive column headers that explain the data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Implement pagination for tables with more than 25-50 rows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Align numeric data to the right, text to the left</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use monospace fonts for technical data (IDs, timestamps, IPs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide visual feedback for selected/hovered rows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Include a row count indicator to show total and current range</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Make table headers sticky when scrolling long tables</span>
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
                  <span>Display hundreds of rows without pagination or virtual scrolling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use vague column headers like "Data" or "Info"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make table cells too narrow for their content (causes wrapping)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Forget to include aria-labels for checkbox selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use tables for layout purposes (use CSS Grid or Flexbox instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Mix different data types in the same column</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Hide critical information that requires horizontal scrolling</span>
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
                Tables use semantic HTML (table, thead, tbody, tr, th, td elements)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Column headers are properly marked with th elements and scope attributes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Row selection checkboxes include descriptive aria-label attributes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Tables meet WCAG 2.2 AA contrast requirements for all text and borders
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Keyboard navigation allows users to tab through interactive elements
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}