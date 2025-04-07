import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../utils/auth';

const Home = () => {
  const navigate = useNavigate();
  const role = getUserRole();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-10">
      <h1 className="text-3xl font-bold">Welcome to the AI Customer Support Assistant</h1>
      <p className="text-center max-w-xl">
        This assistant can answer your queries about products, order status, returns, and more using AI.
      </p>

      
      <div className="flex flex-col items-center justify-center text-gray-700 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-blue-600">Meet Your 24/7 AI Assistant 🤖</h2>
          <p className="text-base max-w-xl">
            Imagine a 24/7 customer support assistant that never sleeps, never gets tired, and delivers instant, accurate responses—all with a human touch!
            Introducing our ChatGPT-driven chatbot, your ultimate AI-powered assistant that handles customer inquiries with speed and precision.
          </p>
          <div className="text-left max-w-md mx-auto text-sm text-gray-600 space-y-1">
            <p>💬 <strong>What can it do?</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Answer product-related questions instantly</li>
              <li>✅ Provide real-time order status updates</li>
              <li>✅ Guide customers through refund processes</li>
              <li>✅ Clarify store policies with clear, automated responses</li>
            </ul>
            <p className="pt-2 font-medium text-center">Upgrade your customer experience today! 🚀</p>
          </div>
        </div>
      </div>

      
      {isAuthenticated() ? (
        <>
          {role === 'admin' ? (
            <button
              onClick={() => navigate('/admin')}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go to Admin Panel
            </button>
          ) : (
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Start Chatting
            </button>
          )}
        </>
      ) : (
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
