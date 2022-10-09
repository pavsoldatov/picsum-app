import { motion } from "framer-motion";

import "./Main.scss";
import PhotoList from "../PhotoCard/PhotoList";
import PhotoGrid from "./Grid/PhotoGrid";

const Main = ({ children, photos, width, height, isFetching, setIsFetching }) => {
  return (
    <main className="main">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PhotoGrid>
          <PhotoList
            photos={photos}
            width={width}
            height={height}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
          />
        </PhotoGrid>
      </motion.div>
      {children}
    </main>
  );
};

export default Main;
