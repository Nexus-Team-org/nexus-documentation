import { useRoutes } from "react-router-dom";
import { Suspense, ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface AppRouterProps {
  children?: ReactNode;
}

export const AppRouter: React.FC<AppRouterProps> = () => {
  
  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-12 h-12 animate-spin text-foreground" />
        </div>
      }
    >
    </Suspense>
  );
};
