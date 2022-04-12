import axios from "axios";

export default axios.create({
  baseURL:
    "http://localhost:4000/" ||
    "https://dashboard-node-jphinning.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
