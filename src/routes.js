import Dashboard from "views/Dashboard.js";
import ManageNotification from "views/ManageNotification.js";
import ManageEmail from "views/ManageEmail.js";
import ManageContent from "views/ManageContent.js";
import ExploreBlockchain from "views/ExploreBlockchain.js";
import AdminWallet from "views/AdminWallet.js";
import Security from "views/Security.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/manage-notification",
    name: "Manage Notifications",
    icon: "nc-icon nc-circle-09",
    component: ManageNotification,
    layout: "/admin",
  },
  {
    path: "/manage-email",
    name: "Manage Emails",
    icon: "nc-icon nc-notes",
    component: ManageEmail,
    layout: "/admin",
  },
  {
    path: "/manage-content",
    name: "Manage Content",
    icon: "nc-icon nc-paper-2",
    component: ManageContent,
    layout: "/admin",
  },
  {
    path: "/explore-blockchain",
    name: "Explore Blockchain",
    icon: "nc-icon nc-atom",
    component: ExploreBlockchain,
    layout: "/admin",
  },
  {
    path: "/admin-wallet",
    name: "Admin Wallet",
    icon: "nc-icon nc-pin-3",
    component: AdminWallet,
    layout: "/admin",
  },
  {
    path: "/security",
    name: "Security",
    icon: "nc-icon nc-bell-55",
    component: Security,
    layout: "/admin",
  },
];

export default dashboardRoutes;
