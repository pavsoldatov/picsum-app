import Photo from "./Photo";

const AllPhotosList = ({
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
      {photos.map((p) => {
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
            setPhotos={setPhotos}
            photos={photos}
          />
        );
      })}
    </>
  );
};

export default AllPhotosList;
