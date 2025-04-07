import React from 'react';

const AnnouncementModal = ({ isOpen, onClose, onSend, message, setMessage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-2">Send Announcement</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">Cancel</button>
          <button onClick={onSend} className="px-3 py-1 bg-blue-600 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
