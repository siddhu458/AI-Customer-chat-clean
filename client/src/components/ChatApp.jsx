import { useState } from "react";
import axios from "axios";
import { getToken, getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const ChatApp = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const user = getUser();

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMsg = { sender: "User", text: message };
        setChat((prev) => [...prev, userMsg]);
        setMessage("");
        setLoading(true);

        try {
            const response = await axios.post(
                "https://ai-customer-chat-clean-2.onrender.com/api/chat",
                { message },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );

            const botReply = { sender: "Bot", text: response.data.reply };
            setChat((prev) => [...prev, botReply]);
        } catch (err) {
            console.error("Error sending message:", err);
            setChat((prev) => [
                ...prev,
                { sender: "Bot", text: "Sorry, something went wrong." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>Welcome, {user?.username}</h2>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>

            <div style={styles.chatBox}>
                {chat.map((msg, i) => (
                    <p key={i}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                ))}
                {loading && <p><em>Bot is typing...</em></p>}
            </div>

            <div style={styles.inputArea}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.sendButton}>Send</button>
            </div>
        </div>
    );
};


const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoutButton: {
        padding: "0.5rem 1rem",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    },
    chatBox: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "1rem",
        height: "300px",
        overflowY: "auto",
        marginTop: "1rem",
        background: "#f9f9f9",
    },
    inputArea: {
        display: "flex",
        marginTop: "1rem",
    },
    input: {
        flex: 1,
        padding: "0.5rem",
        fontSize: "1rem",
    },
    sendButton: {
        padding: "0.5rem 1rem",
        marginLeft: "0.5rem",
        backgroundColor: "#2196f3",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
    },
};

export default ChatApp;
