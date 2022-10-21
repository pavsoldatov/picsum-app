import { useEffect, useState } from "react";

import "./App.scss";
import { getData } from "./api/axios";
import Main from "./components/Layout/Main";
import getResizedPhotos from "./util/getResizedPhotos";
import ImageModal from "./components/ImageModal/ImageModal";

const getInitialList = () => {
  const localData = localStorage.getItem("photos");
  return localData ? JSON.parse(localData) : [];
};
const initialState = getInitialList();

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageNum, setPageNum] = useState(2);
  const [isFetching, setIsFetching] = useState(true);
  const [viewed, setViewed] = useState({ isViewed: false, viewId: "" });
  const [limit, setLimit] = useState(9);

  const photoHeight = 200;
  const photoWidth = 300;

  const [favoritePhotos, setFavoritePhotos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(favoritePhotos));
  }, [favoritePhotos]);

  useEffect(() => {
    getData(pageNum, limit).then((json) => {
      const resizedPhotos = getResizedPhotos(json, photoWidth, photoHeight);
      const favIDs = favoritePhotos.map((photo) => photo.id);
      const newPhotos = resizedPhotos.map((rp) =>
        favIDs.includes(rp.id)
          ? { ...rp, isFavorite: true }
          : { ...rp, isFavorite: false }
      );

      setPhotos(newPhotos);
      setIsFetching(false);
    });
  }, [pageNum, limit]);

  return (
    <div className="App">
      <ImageModal setViewed={setViewed} viewed={viewed} isFetching={isFetching}/>
      <Main
        photos={photos}
        setPhotos={setPhotos}
        width={photoWidth}
        height={photoHeight}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
        viewed={viewed}
        setViewed={setViewed}
        limit={limit}
        setLimit={setLimit}
        setPageNum={setPageNum}
        favoritePhotos={favoritePhotos}
        setFavoritePhotos={setFavoritePhotos}
      />
    </div>
  );
}

export default App;
