// router/index.tsx
import { useRoutes, RouteObject } from "react-router-dom";
import { Suspense, ReactNode, lazy } from "react";
import { Loader2 } from "lucide-react";

interface AppRouterProps {
  children?: ReactNode;
}

// Lazy-loaded components
const DocsLayout = lazy(() => import("@/layouts/DocsLayout"));
const Index = lazy(() => import("@/pages/Index"));
const GettingStarted = lazy(() => import("@/pages/GettingStarted"));
const Components = lazy(() => import("@/pages/Components"));
const Examples = lazy(() => import("@/pages/Examples"));
const Changelog = lazy(() => import("@/pages/Changelog"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <DocsLayout />,
    children: [
      { path: "", element: <Index /> },
      { path: "getting-started", element: <GettingStarted /> },
      { path: "components", element: <Components /> },
      { path: "examples", element: <Examples /> },
      { path: "changelog", element: <Changelog /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export const AppRouter: React.FC<AppRouterProps> = () => {
  const routes = useRoutes(routeConfig);
  
  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-12 h-12 animate-spin text-foreground" />
        </div>
      }
    >
      {routes}
    </Suspense>
  );
};