import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { localUrl } from "../constant/constant";

// Create Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token"); 
      if (!token) return;

      console.log("===>",token)

      const response = await axios.get(`${localUrl}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, 
      });

      console.log("User Profile:", response.data);
      setData(response.data); // Store user data in state
    } catch (error) {
      logout()
      console.error("Error fetching profile:", error.response?.data);
    }
  };

 

  const logout = () => {
    localStorage.removeItem("token");
    setData(null);
  };

  return (
    <AuthContext.Provider value={{ user: data, logout ,fetchProfile}}>
      {children}
    </AuthContext.Provider>
  );
};
