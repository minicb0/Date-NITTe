import axios from "axios";
import { API_URL } from "./config/config";

export const ApiService = {
	login: (data) => axios.default.post(`${API_URL}/api/login`, data),
	register: (data) => axios.default.post(`${API_URL}/api/register`, data),
};