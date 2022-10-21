import ReactDOM from "react-dom";

import ImageModalOverlay from "./ImageModalOverlay";
import Backdrop from "./Backdrop";
import { useCloseModalOnEscape } from "./useCloseOnEscape";
import "./ImageModal.scss";

const ImageModal = ({ setViewed, viewed }) => {
  const { isViewed, viewId } = viewed;

  useCloseModalOnEscape(setViewed); // expects a boolean state setter

  return (
    isViewed && (
      <>
        {ReactDOM.createPortal(
          <Backdrop setViewed={setViewed} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ImageModalOverlay setViewed={setViewed} viewed={viewed} />,
          document.getElementById("overlay-root")
        )}
      </>
    )
  );
};

export default ImageModal;
