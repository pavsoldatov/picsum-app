import CloseButton from "./CloseButton";
import "./ImageModal.scss";

const ImageModal = ({ setViewed, viewed }) => {
  const { isViewed, viewId } = viewed;
  const src = `https://picsum.photos/id/${viewId}/1940/1200`;

  return (
    isViewed && (
      <div className="image-modal__backdrop">
        <div className="image-modal">
          <header style={{ textAlign: "end" }}>
            <CloseButton setViewed={setViewed} viewed={viewed} />
          </header>
          <img width="100%" className="image-modal__image" src={src} alt="" />
        </div>
      </div>
    )
  );
};

export default ImageModal;
