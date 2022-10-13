import FavoritePhotosList from "./FavoritePhotosList";
import AllPhotosList from "./AllPhotosList";

const PhotoList = ({
  photos,
  isFetching,
  setIsFetching,
  setViewed,
  setPhotos,
  favoritePhotos,
  setFavoritePhotos,
  activeFilter,
}) => {
  if (activeFilter === "Favorites" && favoritePhotos.length > 0)
    return (
      <>
        <FavoritePhotosList
          photos={photos}
          setPhotos={setPhotos}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
          setViewed={setViewed}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
      </>
    );

  if (activeFilter === "All" && photos.length > 0) {
    return (
      <>
        <AllPhotosList
          photos={photos}
          setPhotos={setPhotos}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
          setViewed={setViewed}
          favoritePhotos={favoritePhotos}
          setFavoritePhotos={setFavoritePhotos}
        />
      </>
    );
  }
};

export default PhotoList;
