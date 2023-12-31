import axios from "axios";
const API_BASE_URL = "http://16.171.64.102:8080";

export const saveFormData = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/findings`, formData);
    console.log("Form data saved successfully:", response.data);
  } catch (error) {
    throw error;
  }
};
