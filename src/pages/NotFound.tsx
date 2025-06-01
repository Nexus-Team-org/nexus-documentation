import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6 text-center bg-card p-8 rounded-lg shadow-lg border border-border">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-6 mx-auto">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-6">
          <Button asChild variant="outline" className="group">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="pt-4 text-xs text-muted-foreground">
          <p>If you believe this is a mistake, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
