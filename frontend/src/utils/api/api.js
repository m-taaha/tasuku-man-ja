import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true, // this allows cookies to be sent/received
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  const { data } = await axiosInstance.post("/user/register", userData);
  return data;
};

export const loginUser = async (userData) => {
  const { data } = await axiosInstance.post("/user/login", userData);
  return data;
};

export const logoutUser = async () => {
  const res = await axiosInstance.post("/user/logout")
  return res.data;
}
