import { useState } from "react";
import { motion } from "framer-motion";

import "./Photo.scss";

import LikeButton from "../Button/LikeButton";
import UnlikeButton from "../Button/UnlikeButton";
import ViewButton from "../Button/ViewButton";
import addFavsToLocalStorage from "../../util/addFavsToLocalStorage";

const Photo = ({
  id,
  author,
  url,
  isFetching,
  setIsFetching,
  setViewed,
  photo,
  favoritePhotos,
  setFavoritePhotos,
  isFavorite,
  photos,
  setPhotos,
}) => {
  const imageIsLoaded = () => setIsFetching(false);
  const [isLiked, setIsLiked] = useState(isFavorite);

  const handleLike = () => {
    if (isLiked) return
    const likedPhoto = { ...photo, isFavorite: true };
    const newPhotos = photos.map((ph) => ph.id === photo.id ? likedPhoto : ph);
    setFavoritePhotos((prevFavs) => [...prevFavs, likedPhoto]);
    setPhotos(newPhotos)
    setIsLiked(true);
    return;
  }

  const handleUnlike = () => {
    if (!isLiked) return
    const unlikedPhoto = { ...photo, isFavorite: false };
    const newPhotos = photos.map((ph) => ph.id === photo.id ? unlikedPhoto : ph);
    setFavoritePhotos((prevFavs) => prevFavs.filter((fav) => fav.id !== photo.id));
    setPhotos(newPhotos);
    setIsLiked(false);
    return;
  }
  return (
    <article className="content" tabIndex={0}>
      {!isFetching && (
        <>
          <div className="content__overlay" />
          <div className="content__details">
            {isLiked ? (
              <UnlikeButton handleUnlike={handleUnlike} />
            ) : (
              <LikeButton handleLike={handleLike} />
            )}
            <ViewButton setViewed={setViewed} id={id} />
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
