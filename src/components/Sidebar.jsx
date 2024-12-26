import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import {
  FiHome,
  FiCode,
  FiCloud,
  FiBook,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/Frame_9.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const menuItems = [
    { icon: FiHome, label: "Repositories", path: "/dashboard" },
    { icon: FiCode, label: "AI Code Review", path: "/dashboard/code-review" },
    {
      icon: FiCloud,
      label: "Cloud Security",
      path: "/dashboard/cloud-security",
    },
    { icon: FiBook, label: "How to Use", path: "/dashboard/How-to-use" },
    { icon: FiSettings, label: "Settings", path: "/dashboard/settings" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-0 top-0 left-0 z-40 w-full lg:w-64 bg-white border-b border-gray-200
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"}`}
      >
        <div className="h-full flex flex-col p-4">
          {/* Header with Logo on the left and Hamburger on the right */}
          <div className="flex justify-between items-center mb-8">
            {/* Logo on the Left */}
            <img src={logo} alt="CodeAnt AI" className="h-8" />
            {/* Hamburger Button (on mobile) */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md bg-white shadow-md"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* User Dropdown */}
          <div className="mb-12">
            <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
              <option>UtkarshDhairyaPanwar</option>
            </select>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1">
            {menuItems.map(({ icon: Icon, label, path }) => (
              <Link
                key={label}
                to={path}
                className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md text-sm ${
                  location.pathname === path
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  // Close the sidebar when a link is clicked (mobile view)
                  setIsOpen(false);
                }}
              >
                <Icon className="text-xl" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Support Button */}
          <button
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 text-sm"
            onClick={() => {
              // Close sidebar and navigate to the support page or login
              setIsOpen(false);
              navigate("/support");
            }}
          >
            <IoCallOutline className="text-xl" />
            <span>Support</span>
          </button>

          {/* Logout Button */}
          <button
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 text-sm"
            onClick={() => {
              // Close sidebar and navigate to the login page
              setIsOpen(false);
              navigate("/");
            }}
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
