import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ADMIN DASHBOARD</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-gray-700 text-lg">
          Welcome, Admin! You have full access. Here you can manage products, users, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Manage Products</h2>
          <p className="text-gray-600 mb-4">Add, edit, or remove products from your store inventory.</p>
          <button
            onClick={() => navigate('/admin/products')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go to Products
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Manage Users</h2>
          <p className="text-gray-600 mb-4">View and manage user accounts and permissions.</p>
          <button
            onClick={() => navigate('/admin/users')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Go to Users
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">More Features</h2>
          <p className="text-gray-600 mb-4">Access reports, analytics, and extra tools.</p>
          <button
            onClick={() => navigate('/admin/tools')}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Explore Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
