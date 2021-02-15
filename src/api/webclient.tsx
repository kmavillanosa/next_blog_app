import axios from "axios";

export const WebClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});



