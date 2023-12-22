import axios from "axios";
const API_BASE_URL = "http://localhost:8080";

export const login = async (userDTO) => {
  try {
    const endpoint = `${API_BASE_URL}/auth/login`;
    const response = await axios.post(endpoint, userDTO);
    if (response.data.status == "OK") {
      console.log(response.data.data);
      return response.data.data;
    } else {
      alert("Login Failed!");
    }
  } catch (error) {
    throw error;
  }
};
