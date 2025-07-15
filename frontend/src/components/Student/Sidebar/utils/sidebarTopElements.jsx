import { LayoutDashboard, BookTemplate, TestTubeDiagonal } from "lucide-react";

export const sidebarTopElements = [
  {
    label: "Dashboard",
    to: "/student/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Assesments",
    to: "/student/assesments",
    icon: <TestTubeDiagonal />,
  },
];