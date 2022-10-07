import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

import PhotoGrid from "./components/Layout/Grid/PhotoGrid";
import PhotoList from "./components/PhotoCard/PhotoList";

const instance = axios.create({
  baseURL: "https://picsum.photos/",
  timeout: 1000,
});

const getData = async (page = 1, limit = 9) => {
  const response = await instance.get(`/v2/list?page=${page}&limit=${limit}`);
  return response.data;
};

const getResizedPhotos = (payload, width = 600, height = 400) => {
  if (!height) height = width;

  const resizedPhotos = payload.map((item) => {
    const replacement = `${width}/${height}`;
    const regex = /([0-9]+)\/([0-9]+)(?=[^\/]*$)/;
    const updatedUrl = item.download_url.replace(regex, replacement);
    return {
      ...item,
      width: width,
      height: height,
      download_url: updatedUrl,
    };
  });

  return resizedPhotos;
};

function App() {
  const [photos, setPhotos] = useState([]);
  const photoHeight = 200;
  const photoWidth = 300;

  useEffect(() => {
    getData().then((json) => {
      const resizedPhotos = getResizedPhotos(json, photoWidth, photoHeight);
      setPhotos(resizedPhotos);
    });
  }, []);

  return (
    <div className="App">
      <header>Header</header>
      <main style={{ flex: "1", display: "flex" }}>
        <PhotoGrid>
          <PhotoList photos={photos} width={photoWidth} height={photoHeight} />
        </PhotoGrid>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
