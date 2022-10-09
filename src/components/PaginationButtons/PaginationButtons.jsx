import Button from "../Button/Button";
import "./PaginationButtons.scss";

const PaginationButtons = ({ setPageNum }) => {
  return (
    <div className="pagination-buttons">
      <button>Prev</button>
      <Button value={"1"} setPageNum={setPageNum} />
      <Button value={"2"} setPageNum={setPageNum} />
      <Button value={"3"} setPageNum={setPageNum} />
      <button>Next</button>
    </div>
  );
};

export default PaginationButtons;
