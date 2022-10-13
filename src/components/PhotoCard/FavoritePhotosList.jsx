import Photo from "./Photo";

const FavoritePhotosList = ({
  photos,
  setPhotos,
  isFetching,
  setIsFetching,
  setViewed,
  favoritePhotos,
  setFavoritePhotos,
}) => {
  return (
    <>
      {favoritePhotos.map((p) => {
        return (
          <Photo
            key={p.id}
            id={p.id}
            author={p.author}
            url={p.download_url}
            photo={p}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
            setViewed={setViewed}
            isFavorite={p.isFavorite}
            favoritePhotos={favoritePhotos}
            setFavoritePhotos={setFavoritePhotos}
            photos={photos}
            setPhotos={setPhotos}
          />
        );
      })}
    </>
  );
};

export default FavoritePhotosList;
