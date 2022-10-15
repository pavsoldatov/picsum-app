import "./Backdrop.scss";

const Backdrop = ({ setViewed }) => {
  return (
    <div onClick={() => setViewed(false)} className="image-modal__backdrop" />
  );
};

export default Backdrop;
