import Dashboard from "views/Dashboard.js";
import ManageNotification from "views/ManageNotification.js";
import ManageEmail from "views/ManageEmail.js";
import ManageContent from "views/ManageContent.js";
import ExploreBlockchain from "views/ExploreBlockchain.js";
import AdminWallet from "views/AdminWallet.js";
import Security from "views/Security.js";
import AccountSettings from "./views/AccountSettings";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: Dashboard,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/manage-notification",
        name: "Manage Notifications",
        icon: "nc-icon nc-bell-55",
        component: ManageNotification,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/manage-email",
        name: "Manage Emails",
        icon: "nc-icon nc-email-85",
        component: ManageEmail,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/manage-content",
        name: "Manage Content",
        icon: "nc-icon nc-paper-2",
        component: ManageContent,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/explore-blockchain",
        name: "Explore Blockchain",
        icon: "nc-icon nc-app",
        component: ExploreBlockchain,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/admin-wallet",
        name: "Admin Wallet",
        icon: "nc-icon nc-bank",
        component: AdminWallet,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/security",
        name: "Security",
        icon: "nc-icon nc-atom",
        component: Security,
        layout: "/admin",
        sideMenu: true
    },
    {
        path: "/account-settings",
        name: "Account Settings",
        icon: "nc-icon nc-bell-55",
        component: AccountSettings,
        layout: "/admin",
        sideMenu: false
    },
];

export default dashboardRoutes;
