import axios from "axios";

const Axiospublic = axios.create({
baseURL: import.meta.env.VITE_server_url
})
export default Axiospublic