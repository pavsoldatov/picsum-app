import { useEffect, useState } from "react";
import "./App.scss";

import { getData } from "./api/axios";
import PhotoGrid from "./components/Layout/Grid/PhotoGrid";
import PhotoList from "./components/PhotoCard/PhotoList";

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
  console.log(resizedPhotos);
  return resizedPhotos;
};

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const photoHeight = 200;
  const photoWidth = 300;

  useEffect(() => {
    getData(pageNum).then((json) => {
      const resizedPhotos = getResizedPhotos(json, photoWidth, photoHeight);
      setPhotos(resizedPhotos);
    });
  }, []);

  return (
    <div className="App">
      <header>Header</header>
      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhotoGrid>
          <PhotoList photos={photos} width={photoWidth} height={photoHeight} />
        </PhotoGrid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <button>Prev</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
