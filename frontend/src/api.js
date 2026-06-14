import axios from "axios";

const BASE_URL = "http://localhost:5000";

// CREATE DATE REQUEST
export const createDateRequest = (data) => {
  return axios.post(`${BASE_URL}/api/date-request`, data);
};

// GET DATE REQUEST
export const getDateRequest = (id) => {
  return axios.get(`${BASE_URL}/api/date-request/${id}`);
};

// RESPOND TO DATE REQUEST
export const respondToDateRequest = (id, data) => {
  return axios.post(`${BASE_URL}/api/date-request/${id}/respond`, data);
};