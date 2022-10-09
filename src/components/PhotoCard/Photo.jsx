import { motion } from "framer-motion";
import "./Photo.scss";

const Photo = ({ id, author, url, isFetching, setIsFetching }) => {
  const imageIsLoaded = () => setIsFetching(false);

  return (
    <article className="content">
      {!isFetching && (
        <a href="/" target="">
          <motion.img
            className="content__photo"
            src={url}
            initial={{ opacity: 0 }}
            animate={{ opacity: isFetching ? 0 : 1 }}
            transition={{ opacity: { delay: 0.15, duration: 0.25 } }}
            onLoad={imageIsLoaded}
          />
          <div className="content__overlay"></div>
          <div className="content__details">
            <h4 className="content__title">❤️</h4>
            <h3 className="content__title">{author}</h3>
          </div>
        </a>
      )}
    </article>
  );
};

export default Photo;
