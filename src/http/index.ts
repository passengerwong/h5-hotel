import Axios, { AxiosInstance } from "axios";

console.log("dd", import.meta.env);
const isPro = import.meta.env.MODE === "production";

const instace: AxiosInstance = Axios.create({
  baseURL: isPro ? "http://localhost:3303" : "/test",
  timeout: 3000,
});

export default instace;
