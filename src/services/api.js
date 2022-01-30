import axios from "axios";

export const api = axios.create({
    baseURL: "https://clarke-backend.herokuapp.com/api/"
})