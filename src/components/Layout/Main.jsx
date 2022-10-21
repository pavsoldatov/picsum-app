import { motion } from "framer-motion";

import "./Main.scss";
import PhotoList from "../PhotoCard/PhotoList";
import PhotoGrid from "./Grid/PhotoGrid";
import FilterButtons from "../FilterButtons/FilterButtons";
import PerPageInput from "../PerPageInput/PerPageInput";
import ControlsSection from "./ControlsSection/ControlsSection";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import { useState } from "react";

const Main = ({
  photos,
  setPhotos,
  width,
  height,
  isFetching,
  setIsFetching,
  setViewed,
  setLimit,
  pageNum,
  setPageNum,
  favoritePhotos,
  setFavoritePhotos,
}) => {
  const changeItemsPerPage = (e) => setLimit(e.target.value);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="main">
      <ControlsSection>
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <PerPageInput
          changeItemsPerPage={changeItemsPerPage}
          placeholder={photos.length}
        />
      </ControlsSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PhotoGrid>
          {!isFetching && (
            <PhotoList
              photos={photos}
              setPhotos={setPhotos}
              width={width}
              height={height}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
              setViewed={setViewed}
              favoritePhotos={favoritePhotos}
              setFavoritePhotos={setFavoritePhotos}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          )}
        </PhotoGrid>
      </motion.div>
      <PaginationButtons pageNum={pageNum} setPageNum={setPageNum} />
    </main>
  );
};

export default Main;
