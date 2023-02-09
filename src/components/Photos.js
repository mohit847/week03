import React, { useEffect, useState } from "react";
import { getAllPhotos } from "../apis/apis";
// import Axios from "axios";

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/photos")
  //       .then((response) => response.json())
  //       .then((json) => setPhotoList(json))
  //       .finally(() => setIsLoading(false));
  //   }, []);

  useEffect(() => {
    getAllPhotos()
    // Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        let foundPhotos = response.data;
        setPhotoList(foundPhotos);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      {photoList.map((photo, index) => {
        <div key={index}>
          <img src={photo.url} alt={photo.title} />
        </div>;
      })}
    </div>
  );
};

export default Photos;
