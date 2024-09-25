import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyTeamLogo from '../assets/images/myteam-logo.svg'
function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">
        <div className="p-4 text-center text-2xl font-bold">
          <img src="{MyteamLogo}" alt="Myteam Logo" />
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-blue-700">
              <Link to="/users">Users</Link>
            </li>
            <li className="p-4 hover:bg-blue-700">
              <Link to="/companies">Companies</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
