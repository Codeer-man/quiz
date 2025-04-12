import {
  FiHome,
  FiUsers,
  FiPlusSquare,
  FiEdit,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
  FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div
      className={`${
        expand ? "w-64" : "w-20"
      } bg-blue-800 text-white transition-all duration-300 flex flex-col fixed h-full`}
    >
      {/* Header with toggle button */}
      <div className="p-4 flex items-center justify-between border-b border-blue-700">
        {expand ? (
          <h1 className="text-xl font-bold truncate">Admin Panel</h1>
        ) : (
          <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
        )}
        <button
          onClick={toggleExpand}
          className="text-white hover:text-blue-200 focus:outline-none"
        >
          {expand ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto mt-4">
        <ul className="p-2 space-y-2">
          <li>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              <FiHome size={20} />
              {expand && <span className="ml-3 truncate">Dashboard</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              <FiUsers size={20} />
              {expand && <span className="ml-3 truncate">Users</span>}
            </NavLink>
          </li>

          {expand && (
            <li className="pt-4 mt-4 border-t border-blue-700 text-xs uppercase text-blue-300 px-3">
              Operations
            </li>
          )}

          <li>
            <NavLink
              to="/admin/create"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              <FiPlusSquare size={20} />
              {expand && <span className="ml-3 truncate">Create Quiz</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/update"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              <FiEdit size={20} />
              {expand && <span className="ml-3 truncate">Update</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/view"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              <FiEye size={20} />
              {expand && <span className="ml-3 truncate">View</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-blue-700">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg mb-4 ${
              isActive ? "bg-blue-700" : "hover:bg-blue-700"
            }`
          }
        >
          <FiSettings size={20} />
          {expand && <span className="ml-3 truncate">Settings</span>}
        </NavLink>

        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-700"></div>
          {expand && (
            <div className="ml-3">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-blue-200 truncate">
                admin@example.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
