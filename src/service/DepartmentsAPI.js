import axios from "axios";
const API_BASE_URL = "http://localhost:8080";

export const getAllDepartments = async () => {
  try {
    const endpoint = `${API_BASE_URL}/departments/all`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
