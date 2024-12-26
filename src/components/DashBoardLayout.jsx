import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Sidebar from "./Sidebar";

function DashBoardLayout() {
  return (
    <div className="h-screen bg-gray-50 lg:flex">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default DashBoardLayout;
