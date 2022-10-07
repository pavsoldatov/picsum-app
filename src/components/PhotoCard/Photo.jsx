import { useState } from "react";
import "./Photo.scss";

const Photo = ({ author, url }) => {
  return (
    <figure>
      <picture>
        <img className="photo-card" src={url} alt="" />
      </picture>
    </figure>
  );
};

export default Photo;
