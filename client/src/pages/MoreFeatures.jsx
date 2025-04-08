import React, { useEffect, useState } from 'react';
import { Download, Users, FileText, DatabaseZap, Megaphone } from 'lucide-react';
import axios from 'axios';
import AnnouncementModal from '../components/AnnouncementModal'; 

const MoreFeatures = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState([]);

  
  const handleExport = () => {
    try {
      if (users.length === 0) return alert("No users to export.");

      const headers = Object.keys(users[0]).filter(key => key !== 'password');
      const csvRows = [
        headers.join(","),
        ...users.map(user =>
          headers.map(field => `"${(user[field] ?? '').toString().replace(/"/g, '""')}"`).join(",")
        )
      ];

      const csvString = csvRows.join("\n");
      const blob = new Blob([csvString], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "users.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("CSV Export Error:", err);
      alert("Failed to export users.");
    }
  };


  const handleBackup = async () => {
    try {
      const response = await axios.post('https://ai-customer-chat-clean-server.vercel.app/api/admin/backup');
      const { fileUrl } = response.data;

      const link = document.createElement('a');
      link.href = `https://ai-customer-chat-clean-server.vercel.app/${fileUrl}`;
      link.download = fileUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      link.remove();

      alert('✅ Backup downloaded successfully!');
    } catch (err) {
      console.error('Backup error:', err);
      alert('❌ Backup failed. Please check server logs.');
    }
  };

  const handleAnnouncement = () => {
    setModalOpen(true);
  };

  const handleSendAnnouncement = () => {
    console.log("Announcement sent:", announcement); 
    alert("📢 Announcement sent!");
    setModalOpen(false);
    setAnnouncement("");
  };

  useEffect(() => {
    axios.get('https://ai-customer-chat-clean-server.vercel.app/api/users')
      .then(res => {
        setUsers(res.data);
        setTotalUsers(res.data.length);
      })
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Admin Tools & Reports</h2>
      <p className="text-gray-700 mb-4">Manage data and perform advanced actions.</p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <button
          onClick={handleExport}
          className="flex items-center p-4 bg-blue-100 hover:bg-blue-200 rounded-xl shadow"
        >
          <Download className="mr-2 text-blue-600" />
          Export Users
        </button>

        <button
          onClick={handleBackup}
          className="flex items-center p-4 bg-green-100 hover:bg-green-200 rounded-xl shadow"
        >
          <DatabaseZap className="mr-2 text-green-600" />
          Trigger Backup
        </button>

        <button
          onClick={handleAnnouncement}
          className="flex items-center p-4 bg-yellow-100 hover:bg-yellow-200 rounded-xl shadow"
        >
          <Megaphone className="mr-2 text-yellow-600" />
          Post Announcement
        </button>

        <div className="flex items-center p-4 bg-purple-100 rounded-xl shadow">
          <Users className="mr-2 text-purple-600" />
          Total Users: <span className="ml-1 font-bold">{totalUsers}</span>
        </div>

        <div className="flex items-center p-4 bg-red-100 rounded-xl shadow">
          <FileText className="mr-2 text-red-600" />
          Weekly Reports: <span className="ml-1 font-bold">Coming Soon</span>
        </div>
      </div>

      <AnnouncementModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSend={handleSendAnnouncement}
        message={announcement}
        setMessage={setAnnouncement}
      />
    </div>
  );
};

export default MoreFeatures;
