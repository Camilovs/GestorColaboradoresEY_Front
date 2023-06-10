import axios from "axios";
import { getEnvVariables } from "../utils/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const baseApi = axios.create({
  baseURL: VITE_API_URL,
});

export default baseApi;
