import { IoCloseSharp } from "react-icons/io5";

import "./CloseButton.scss";

const CloseButton = ({ setViewed }) => {
  return (
    <button
      className="image-modal__close-button"
      tabIndex={0}
      onClick={() => setViewed(false)}
    >
      <IoCloseSharp className="close-button__icon" />
    </button>
  );
};

export default CloseButton;
