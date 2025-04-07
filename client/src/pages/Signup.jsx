import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/signup', form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Signup</h2>
        <input type="text" placeholder="Name" className="w-full border px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Email" className="w-full border px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" className="w-full border px-3 py-2" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full rounded">Signup</button>
        <p className="text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-500 underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
