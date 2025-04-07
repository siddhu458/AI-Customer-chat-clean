import { useState } from "react";
import { signup } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "", role: "user" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(credentials);
        navigate("/login");
    };

    return (
        <div
        className="flex justify-center items-center min-h-screen bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: "url('/login.png')" }}
      >
            <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Sign-Up page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700 text-sm text-center font-bold mb-2" htmlFor="username">USERNAME</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            required
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700 text-sm text-center font-bold mb-2" htmlFor="password">PASSWORD</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700 text-sm text-center font-bold mb-2" htmlFor="role">ROLE</label>
                        <select
                            id="role"
                            value={credentials.role}
                            onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
