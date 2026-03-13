import { createBrowserRouter } from "react-router";
import { Root } from "./pages/root";
import { Home } from "./pages/home";
import { ButtonsPage } from "./pages/components/buttons";
import { InputsPage } from "./pages/components/inputs";
import { TablesPage } from "./pages/components/tables";
import { CardsPage } from "./pages/components/cards";
import { BadgesPage } from "./pages/components/badges";
import { AlertsPage } from "./pages/components/alerts";
import { TabsPage } from "./pages/components/tabs";
import { DialogsPage } from "./pages/components/dialogs";
import { FormsPage } from "./pages/components/forms";
import { ProgressPage } from "./pages/components/progress";
import { BreadcrumbsPage } from "./pages/components/breadcrumbs";
import { StatCardsPage } from "./pages/components/stat-cards";
import { StatusBadgesPage } from "./pages/components/status-badges";
import { EmptyStatesPage } from "./pages/components/empty-states";
import { ColorsPage } from "./pages/foundation/colors";
import { TypographyPage } from "./pages/foundation/typography";
import { AccessibilityPage } from "./pages/foundation/accessibility";
import { IconsPage } from "./pages/foundation/icons";
import { DashboardExample } from "./pages/examples/dashboard";
import { UsersExample } from "./pages/examples/users";
import { ApplicationsExample } from "./pages/examples/applications";
import { ServersExample } from "./pages/examples/servers";
import { LogsExample } from "./pages/examples/logs";
import { AuditsExample } from "./pages/examples/audits";
import { CustomDashboardsExample } from "./pages/examples/custom-dashboards";
import { NotFound } from "./pages/not-found";

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "foundation/colors", Component: ColorsPage },
      { path: "foundation/typography", Component: TypographyPage },
      { path: "foundation/accessibility", Component: AccessibilityPage },
      { path: "foundation/icons", Component: IconsPage },
      { path: "components/buttons", Component: ButtonsPage },
      { path: "components/inputs", Component: InputsPage },
      { path: "components/tables", Component: TablesPage },
      { path: "components/cards", Component: CardsPage },
      { path: "components/badges", Component: BadgesPage },
      { path: "components/alerts", Component: AlertsPage },
      { path: "components/tabs", Component: TabsPage },
      { path: "components/dialogs", Component: DialogsPage },
      { path: "components/forms", Component: FormsPage },
      { path: "components/progress", Component: ProgressPage },
      { path: "components/breadcrumbs", Component: BreadcrumbsPage },
      { path: "components/stat-cards", Component: StatCardsPage },
      { path: "components/status-badges", Component: StatusBadgesPage },
      { path: "components/empty-states", Component: EmptyStatesPage },
      { path: "examples/dashboard", Component: DashboardExample },
      { path: "examples/users", Component: UsersExample },
      { path: "examples/applications", Component: ApplicationsExample },
      { path: "examples/servers", Component: ServersExample },
      { path: "examples/logs", Component: LogsExample },
      { path: "examples/audits", Component: AuditsExample },
      { path: "examples/custom-dashboards", Component: CustomDashboardsExample },
      { path: "*", Component: NotFound },
    ],
  },
], { basename });