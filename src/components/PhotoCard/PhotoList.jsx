import Photo from "./Photo";
import FavoritePhotosList from "./FavoritePhotosList";

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
  if (activeFilter === "Favorites")
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
  }
};

export default PhotoList;
