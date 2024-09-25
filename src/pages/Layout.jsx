import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MyTeamLogo from '../assets/images/Icon'; // SVG faylini to'g'ri import qiling

function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-200">
    
      <aside className="w-64 bg-[#014E56] text-white shadow-lg">
        <div className="p-6 text-center text-3xl font-bold border-b border-blue-700">
          <MyTeamLogo className="w-24 mx-auto" /> {/* SVG ni to'g'ri o'lchamda ko'rsatish */}
        </div>
        <nav className="mt-6">
          <ul>
            <li
              className={`p-4 hover:bg-blue-700 transition-colors duration-300 ${
                location.pathname === '/users' ? 'bg-blue-700' : ''
              }`}
            >
              <Link to="/users" className="flex items-center space-x-2">
                <span>👤</span>
                <span>Users</span>
              </Link>
            </li>
            <li
              className={`p-4 hover:bg-blue-700 transition-colors duration-300 ${
                location.pathname === '/companies' ? 'bg-blue-700' : ''
              }`}
            >
              <Link to="/companies" className="flex items-center space-x-2">
                <span>🏢</span>
                <span>Companies</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-300 p-8 shadow-inner">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
