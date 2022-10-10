import { IoEye } from "react-icons/io5";
import "./viewButton.scss";

const ViewButton = ({ setViewed, id }) => {
  const handleViewClick = () => {
    setViewed({ isViewed: true, viewId: id });
  };

  return (
    <button
      type="button"
      tabIndex={0}
      className="view-button"
      title="view photo"
      onClick={handleViewClick}
    >
      <IoEye className="view-button__icon" />
    </button>
  );
};

export default ViewButton;
