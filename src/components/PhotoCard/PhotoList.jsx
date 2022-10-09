import Photo from "./Photo";

const PhotoList = ({ photos, isFetching, setIsFetching }) => {
  return (
    <>
      {photos.map((p) => (
        <Photo
          key={p.id}
          id={p.id}
          author={p.author}
          url={p.download_url}
          isFetching={isFetching}
          setIsFetching={setIsFetching}
        />
      ))}
    </>
  );
};

export default PhotoList;
