import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatWindow from '../components/chatWindow';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Assistant Chat</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Dashboard;
