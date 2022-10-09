import { useEffect, useState } from "react";

import "./App.scss";
import { getData } from "./api/axios";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import Main from "./components/Layout/Main";
import getResizedPhotos from "./util/getResizedPhotos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const photoHeight = 200;
  const photoWidth = 300;

  useEffect(() => {
    getData(pageNum).then((json) => {
      const resizedPhotos = getResizedPhotos(json, photoWidth, photoHeight);
      setPhotos(resizedPhotos);
      setIsFetching(false);
    });
  }, [pageNum]);

  return (
    <div className="App">
      <header>Header</header>
      <Main
        photos={photos}
        setPhotos={setPhotos}
        width={photoWidth}
        height={photoHeight}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
      >
        <PaginationButtons setPageNum={setPageNum} />
      </Main>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
