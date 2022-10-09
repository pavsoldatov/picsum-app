import { useState } from "react";
import { IoHeartSharp, IoHeartDislikeSharp } from "react-icons/io5";
import "./LikeButton.scss";

const LikeButton = ({ handleLike }) => {
  return (
    <button
      type="button"
      tabIndex={0}
      className="like-button"
      title="add to favs"
      onClick={handleLike}
    >
      <IoHeartSharp className={"like-button__icon"} />
    </button>
  );
};

export default LikeButton;
