# Abalone Design System

Enterprise Security Interface Framework v3.0

A comprehensive design system built for enterprise security applications. Abalone combines modern design principles with subtle IT nostalgia -- clean typography, monospace data displays, and structured layouts inspired by early PC/internet admin interfaces, modernized for today's enterprise UX standards.

## Key features

- **WCAG 2.2 Level AA** accessibility compliance across all components
- **Light and dark mode** with full theme support (cyberpunk-inspired dark mode with electric cyan/neon green accents)
- **Modernized IT nostalgia** aesthetic -- clean and professional, not retro for retro's sake
- **Comprehensive documentation** with live previews, code examples, props tables, and best practices for every component
- **Enterprise-ready** patterns including data tables with pagination, audit logs, server management, and dashboard builders

## Tech stack

| Layer          | Technology                                                   |
| -------------- | ------------------------------------------------------------ |
| Framework      | React 18                                                     |
| Routing        | React Router v7 (Data mode with `RouterProvider`)            |
| Styling        | Tailwind CSS v4 with CSS custom properties                   |
| UI primitives  | Radix UI (dialogs, popovers, tabs, tooltips, etc.)           |
| Icons          | Lucide React                                                 |
| Charts         | Recharts                                                     |
| Animation      | Motion (formerly Framer Motion)                              |
| Forms          | React Hook Form                                              |
| Drag & drop    | React DnD                                                    |
| Build tool     | Vite 6                                                       |

## Project structure

```
src/
  styles/
    theme.css          # Design tokens (colors, radii, typography, light/dark mode)
    fonts.css          # Font imports (Inter, JetBrains Mono)
    index.css          # Global styles entry point
    tailwind.css       # Tailwind directives
  app/
    App.tsx            # Root component with RouterProvider
    routes.ts          # All route definitions
    components/
      doc-section.tsx  # Shared DocSection and PageHeader components
      theme-provider.tsx
      theme-toggle.tsx
      ui/              # Reusable UI primitives (button, card, table, badge, etc.)
    pages/
      home.tsx         # Design system landing page
      root.tsx         # Layout shell with sidebar navigation
      not-found.tsx
      foundation/      # Colors, Typography, Icons, Accessibility
      components/      # Buttons, Inputs, Tables, Cards, Badges, Alerts,
                       # Tabs, Dialogs, Forms, Progress, Breadcrumbs,
                       # Stat Cards, Status Badges, Empty States
      examples/        # Full-page example screens
```

## Pages

### Foundation

| Page            | Route                        | Description                                      |
| --------------- | ---------------------------- | ------------------------------------------------ |
| Colors          | `/foundation/colors`         | Full color palette with light/dark mode tokens    |
| Typography      | `/foundation/typography`     | Type scale, font families, heading standards      |
| Icons           | `/foundation/icons`          | Icon library reference and usage guidelines       |
| Accessibility   | `/foundation/accessibility`  | WCAG 2.2 AA compliance guide and patterns         |

### Components

| Page            | Route                          | Description                                    |
| --------------- | ------------------------------ | ---------------------------------------------- |
| Buttons         | `/components/buttons`          | Variants, sizes, states, icon buttons          |
| Inputs          | `/components/inputs`           | Text, select, checkbox, radio, textarea, OTP   |
| Tables          | `/components/tables`           | Data tables with sorting, pagination, actions  |
| Cards           | `/components/cards`            | Content cards, interactive cards, layouts      |
| Badges          | `/components/badges`           | Status, severity, and informational badges     |
| Alerts          | `/components/alerts`           | Inline alerts, banners, toast notifications    |
| Tabs            | `/components/tabs`             | Tab navigation patterns                        |
| Dialogs         | `/components/dialogs`          | Modals, confirmation dialogs, sheets           |
| Forms           | `/components/forms`            | Form layouts, validation, multi-step forms     |
| Progress        | `/components/progress`         | Progress bars, loading states, skeletons       |
| Breadcrumbs     | `/components/breadcrumbs`      | Navigation breadcrumb patterns                 |
| Stat cards      | `/components/stat-cards`       | KPI and metric display cards                   |
| Status badges   | `/components/status-badges`    | Operational status indicators                  |
| Empty states    | `/components/empty-states`     | Empty/zero-data state patterns                 |

### Example pages

| Page                    | Route                          | Description                              |
| ----------------------- | ------------------------------ | ---------------------------------------- |
| Dashboard               | `/examples/dashboard`          | Security overview with charts and stats  |
| User management         | `/examples/users`              | User CRUD with roles and permissions     |
| Application management  | `/examples/applications`       | App inventory and status tracking        |
| Server management       | `/examples/servers`            | Server fleet monitoring                  |
| System logs             | `/examples/logs`               | Filterable log viewer                    |
| Audits                  | `/examples/audits`             | Audit trail with timeline views          |
| Custom dashboard builder| `/examples/custom-dashboards`  | Drag-and-drop dashboard customization    |

## Design tokens

All design tokens are defined in `/src/styles/theme.css` using CSS custom properties. The system uses a dual-theme approach:

- **Light mode**: Clean professional palette with tech blue (`#0066ff`) as primary
- **Dark mode**: Cyberpunk-inspired with electric cyan (`#22d3ee`) primary and neon green (`#3dd68c`) accent

### Typography scale

| Element | Size     | Weight | Line height | Letter spacing |
| ------- | -------- | ------ | ----------- | -------------- |
| H1      | 2rem     | 600    | 1.2         | -0.02em        |
| H2      | 1.5rem   | 600    | 1.3         | -0.01em        |
| H3      | 1.25rem  | 600    | 1.4         | --             |
| H4      | 1rem     | 600    | 1.5         | --             |
| Body    | 1rem     | 400    | 1.5         | --             |
| Label   | 0.875rem | 500    | 1.5         | --             |
| Button  | 0.875rem | 500    | 1.5         | --             |

### Font families

- **Sans-serif**: Inter (UI text, headings, labels)
- **Monospace**: JetBrains Mono (code, data tables, terminal-style elements)

## Conventions

### Casing

- **Page titles and section headings**: Sentence case (e.g., "User management", not "USER MANAGEMENT")
- **Small UI elements** (buttons, badges, table headers, labels): UPPERCASE is acceptable per component context

### Layout patterns

All documentation pages follow a consistent structure:

- `p-8 max-w-6xl` wrapper for page content
- `PageHeader` component from `/src/app/components/doc-section.tsx` for page titles
- `mb-8` spacing between major sections
- `mb-4 pb-2 border-b-2 border-border` for section headings with dividers

### Component documentation

Each component page includes:

- **Preview**: Live interactive component rendering
- **Code**: Copy-ready JSX example
- **Usage**: Contextual guidance (where applicable)
- **Props**: Full props table with types, defaults, and descriptions
- **Best practices**: Enterprise-specific recommendations

## Accessibility

The design system targets WCAG 2.2 Level AA compliance:

- All interactive elements have visible focus indicators using the `--ring` token
- Color contrast ratios meet 4.5:1 for normal text and 3:1 for large text in both themes
- Form inputs include associated labels and error messages
- Dialogs trap focus and support keyboard dismissal
- Status information is conveyed through text and icons, not color alone
- Components use semantic HTML and appropriate ARIA attributes

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```