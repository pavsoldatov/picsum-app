import { useState } from "react";
import "./Photo.scss";

const Photo = ({ author, url }) => {
  return (
    <article className="content">
      <a href="/" target="">
        <img className="content__photo" src={url} alt="" />
        <div className="content__overlay"></div>
        <div className="content__details">
          <figcaption className="content__title">This is a title</figcaption>
        </div>
      </a>
    </article>
  );
};

export default Photo;
