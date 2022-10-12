import { motion } from "framer-motion";

import "./Main.scss";
import PhotoList from "../PhotoCard/PhotoList";
import PhotoGrid from "./Grid/PhotoGrid";
import FilterButtons from "../FilterButtons/FilterButtons";
import PerPageInput from "../PerPageInput/PerPageInput";
import ControlsSection from "./ControlsSection/ControlsSection";

const Main = ({
  children,
  photos,
  setPhotos,
  width,
  height,
  isFetching,
  setIsFetching,
  setViewed,
  setLimit,
  favoritePhotos,
  setFavoritePhotos,
}) => {
  const changeItemsPerPage = (e) => setLimit(e.target.value);

  return (
    <main className="main">
      <ControlsSection>
        <FilterButtons />
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
            />
          )}
        </PhotoGrid>
      </motion.div>
      {children}
    </main>
  );
};

export default Main;
