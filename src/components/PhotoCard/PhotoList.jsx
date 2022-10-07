import Photo from "./Photo";

const PhotoList = ({ photos }) => {

  return (
    <>
      {photos.map((p) => (
        <Photo key={p.id} id={p.id} author={p.author} url={p.download_url}/>
      ))}
    </>
  );
};

export default PhotoList;