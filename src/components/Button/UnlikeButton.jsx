import { IoHeartDislikeSharp } from "react-icons/io5";

import "./UnlikeButton.scss";

const UnlikeButton = ({ handleLike }) => {
  return (
    <button
      type="button"
      tabIndex={0}
      className="unlike-button"
      title="remove from favs"
      onClick={handleLike}
    >
      <IoHeartDislikeSharp className={"unlike-button__icon"} />
    </button>
  );
};

export default UnlikeButton;
