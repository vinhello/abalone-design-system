import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center max-w-md border-4 border-destructive p-8 bg-card">
        <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-destructive" />
        <h1 className="text-4xl mb-2">Error 404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Resource not found
        </p>
        <p className="text-sm mb-6">
          The requested page does not exist in the system database.
        </p>
        <Link to="/">
          <Button>RETURN TO HOME</Button>
        </Link>
      </div>
    </div>
  );
}