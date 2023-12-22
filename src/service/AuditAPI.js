import axios from "axios";
const API_BASE_URL = "http://localhost:8080";

export const addAudit = async (data) => {
  try {
    const endpoint = `${API_BASE_URL}/audits/add`;
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllAudits = async () => {
  try {
    const endpoint = `${API_BASE_URL}/audits/all`;
    const response = await axios.get(endpoint);
    console.log("Audits : ",response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
