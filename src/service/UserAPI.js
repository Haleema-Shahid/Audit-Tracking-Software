import axios from "axios";
const API_BASE_URL = "http://16.171.64.102:8080";

export const getAllAuditors = async () => {
  try {
    const endpoint = `${API_BASE_URL}/user/all`;
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
