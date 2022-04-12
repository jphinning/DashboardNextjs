import axios from "axios";

export default axios.create({
  baseURL:
    "https://dashboard-node-jphinning.herokuapp.com/" ||
    "http://localhost:4000/",
  headers: {
    "Content-type": "application/json",
  },
});
