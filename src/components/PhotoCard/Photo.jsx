import "./Photo.scss";

const Photo = ({ author, url }) => {
  return (
    <article className="content">
      <a href="/" target="">
        <img className="content__photo" src={url} alt="" />
        <div className="content__overlay"></div>
        <div className="content__details">
          <h4 className="content__title">❤️</h4>
          <h3 className="content__title">{author}</h3>
        </div>
      </a>
    </article>
  );
};

export default Photo;
