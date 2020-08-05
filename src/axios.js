import axios from "axios";

// base url to make request to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// in the above line we have exported instance
// thus basically that means is when you import this you can rename the instance
