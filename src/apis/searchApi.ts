import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    lenguage: "es",
    access_token: "putYouraccessTokenHere",
  },
});

export default searchApi;
