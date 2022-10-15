import ReactDOM from "react-dom";
import { useEffect } from "react";

import CloseButton from "./CloseButton";
import Backdrop from "./Backdrop";
import "./ImageModal.scss";

const ImageModal = ({ setViewed, viewed }) => {
  const { isViewed, viewId } = viewed;
  const src = `https://picsum.photos/id/${viewId}/1940/1200`;

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setViewed(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    isViewed && (
      <>
        <Backdrop />
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
