import { IoEye } from "react-icons/io5";
import "./viewButton.scss";

const ViewButton = () => {
  return (
    <button type="button" tabIndex={0} className="view-button" title="view photo">
      <IoEye className="view-button__icon" />
    </button>
  );
};

export default ViewButton;
