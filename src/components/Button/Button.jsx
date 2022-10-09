import "./Button.scss";

const Button = ({value, setPageNum}) => {
  const title = `Page ${value}`
  const ariaLabel = `Page Number ${value}`

  return (
    <button
      className="pagination-button"
      type="text"
      aria-label={ariaLabel}
      title={title}
      onClick={() => setPageNum(value)}
    >{value}</button>
  );
};

export default Button;
