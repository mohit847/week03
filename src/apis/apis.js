import Axios from "axios";

export const getAllPhotos = () =>
    Axios.get("https://jsonplaceholder.typicode.com/photos");