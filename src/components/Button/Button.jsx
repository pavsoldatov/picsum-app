import "./Button.scss";

const Button = ({value, setPageNum}) => {
  return (
    <button
      className="pagination-button"
      type="text"
      aria-label="Page Number"
      onClick={() => setPageNum(value)}
    >{value}</button>
  );
};

export default Button;
