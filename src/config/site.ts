
export const siteConfig = {
  name: "Nexus",
  logo: "</>",
  version: "v1.0.0",
  description: "A modern React component library with TypeScript, Tailwind CSS, and everything you need to build beautiful applications faster.",
  discord: {
    inviteUrl: "https://discord.gg/TaHyq88cmx",
    serverId: "964870545864802314",
    widgetUrl: "https://discord.com/widget?id=964870545864802314&theme=dark"
  },
  navigation: {
    main: [
      {
        title: "Overview",
        href: "/",
      },
      {
        title: "Getting Started",
        href: "/getting-started",
      },
      {
        title: "Components",
        href: "/components",
      },
      {
        title: "Examples",
        href: "/examples",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
    components: [
      {
        title: "Button",
        href: "/components/button",
        icon: "MousePointer2",
        status: "ready",
        description: "Clickable button component with multiple variants"
      },
      {
        title: "Card",
        href: "/components/card",
        icon: "Square",
        status: "ready",
        description: "Container for content with elegant styling"
      },
      {
        title: "Input",
        href: "/components/input",
        icon: "Type",
        status: "ready",
        description: "Text input field with validation support"
      },
      {
        title: "Calendar",
        href: "/components/calendar",
        icon: "Calendar",
        status: "coming-soon",
        description: "Date picker component"
      },
      {
        title: "Switch",
        href: "/components/switch",
        icon: "ToggleLeft",
        status: "ready",
        description: "Toggle switch component"
      },
      {
        title: "Checkbox",
        href: "/components/checkbox",
        icon: "CheckSquare",
        status: "ready",
        description: "Checkbox input with custom styling"
      },
      {
        title: "Select",
        href: "/components/select",
        icon: "List",
        status: "ready",
        description: "Dropdown select component"
      },
      {
        title: "Dialog",
        href: "/components/dialog",
        icon: "Layout",
        status: "coming-soon",
        description: "Modal dialog component"
      },
      {
        title: "Badge",
        href: "/components/badge",
        icon: "Palette",
        status: "ready",
        description: "Small status indicator"
      },
      {
        title: "Command",
        href: "/components/command",
        icon: "Search",
        status: "ready",
        description: "Command palette component"
      },
    ]
  },
  features: [
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Built with Vite for blazing fast development and build times."
    },
    {
      icon: "Shield",
      title: "Type Safe",
      description: "Full TypeScript support with excellent developer experience."
    },
    {
      icon: "Palette",
      title: "Modern Design",
      description: "Professional black and white design system with Tailwind CSS."
    },
    {
      icon: "Code",
      title: "Developer Friendly",
      description: "Clean API, excellent documentation, and great tooling."
    }
  ],
  stats: [
    { label: "Bundle Size", value: "< 50kb" },
    { label: "Components", value: "25+" },
    { label: "TypeScript", value: "100%" },
    { label: "Tree Shaking", value: "✓" }
  ]
} as const;

export type SiteConfig = typeof siteConfig;
