import axios from "axios";
//This is the index.js, the purpose of this is solely to allow axios to connect to the local host and export the url so that it is global.
export default axios.create({
  baseURL: "http://localhost:9000/",
});
