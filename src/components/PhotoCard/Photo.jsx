import { useState } from "react";

import { motion } from "framer-motion";
import "./Photo.scss";

import LikeButton from "../Button/LikeButton";
import UnlikeButton from "../Button/UnlikeButton";
import ViewButton from "../Button/ViewButton";

const Photo = ({ id, author, url, isFetching, setIsFetching }) => {
  const imageIsLoaded = () => setIsFetching(false);

  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    console.log(id)    
    setIsLiked((prevLikeState) => !prevLikeState)
  };

  return (
    <article className="content" tabIndex={0}>
      {!isFetching && (
        <>
          <div className="content__overlay" />
          <div className="content__details">
            {isLiked ? (
              <UnlikeButton handleLike={handleLike} />
            ) : (
              <LikeButton handleLike={handleLike} />
            )}
            <ViewButton />
            <h3 className="content__title">{author}</h3>
          </div>
          <motion.img
            className="content__photo"
            src={url}
            initial={{ opacity: 0 }}
            animate={{ opacity: isFetching ? 0 : 1 }}
            transition={{ opacity: { delay: 0.15, duration: 0.3 } }}
            onLoad={imageIsLoaded}
          />
        </>
      )}
    </article>
  );
};

export default Photo;
