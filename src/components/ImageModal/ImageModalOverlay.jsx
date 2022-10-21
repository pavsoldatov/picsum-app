import CloseButton from "./CloseButton";
import "./ImageModal.scss";

const ImageModalOverlay = ({ setViewed, viewed }) => {
  const { viewId } = viewed;
  const src = `https://picsum.photos/id/${viewId}/1940/1200`;

  return (
    <div className="image-modal">
      <header className="image-modal__header">
        <CloseButton setViewed={setViewed} viewed={viewed} />
      </header>
      <img width="100%" className="image-modal__image" src={src} alt="" />
    </div>
  );
};

export default ImageModalOverlay;
