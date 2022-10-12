import Button from "../Button/Button";
import "./PaginationButtons.scss";

const PaginationButtons = ({ setPageNum }) => {
  return (
    <div className="pagination-buttons">
      <Button value={"1"} text="1" setPageNum={setPageNum} />
      <Button value={"2"} text="2" setPageNum={setPageNum} />
      <Button value={"3"} text="3" setPageNum={setPageNum} />
    </div>
  );
};

export default PaginationButtons;
