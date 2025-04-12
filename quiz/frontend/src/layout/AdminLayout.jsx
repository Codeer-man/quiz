import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar  */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
