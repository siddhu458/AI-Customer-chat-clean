import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

const API_URL = "https://chatbot-backend-mdzs.onrender.com/api/auth";

export const saveToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const removeToken = () => localStorage.removeItem("token");

export const getUser = () => {
  const token = getToken();
  return token ? jwtDecode(token) : null;
};

export function isAuthenticated() {
  return !!getToken(); 
}

export function getUserRole() {
  const user = getUser(); 
  return user?.role || 'guest'; 
}

export const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  saveToken(data.token);
  return getUser();
};

export const signup = async (credentials) => {
  await axios.post(`${API_URL}/signup`, credentials);
};

export const logout = () => removeToken();
