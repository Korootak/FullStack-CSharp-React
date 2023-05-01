import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5076", // Modifiez l'URL si votre backend est hébergé ailleurs
});

import api from "./api";

async function fetchData() {
  try {
    const response = await api.get("/route_du_backend");
    console.log(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}

export default api;
