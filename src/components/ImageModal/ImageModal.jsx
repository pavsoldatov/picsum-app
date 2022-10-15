import ReactDOM from "react-dom";
import { useEffect } from "react";

import CloseButton from "./CloseButton";
import Backdrop from "./Backdrop";
import "./ImageModal.scss";

const ImageModal = ({ setViewed, viewed, isFetching }) => {
  const { isViewed, viewId } = viewed;
  const src = `https://picsum.photos/id/${viewId}/1940/1200`;

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setViewed(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    isViewed && (
      <>
        <Backdrop setViewed={setViewed} />
        <div className="image-modal">
          <header className="image-modal__header">
            <CloseButton setViewed={setViewed} viewed={viewed} />
          </header>
          <img width="100%" className="image-modal__image" src={src} alt="" />
        </div>
      </>
    )
  );
};

export default ImageModal;
