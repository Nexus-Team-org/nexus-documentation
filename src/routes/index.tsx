import type { routesTypes } from "@/types/routesTypes";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const GettingStarted = lazy(() => import("@/pages/GettingStarted"));
const Components = lazy(() => import("@/pages/Components"));

export const routes: routesTypes[] = [
  {
    path: "/",
    component: Home,
    isProtected: false,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
    isProtected: false,
  },
  {
    path: "/components",
    component: Components,
    isProtected: false,
  },
];
