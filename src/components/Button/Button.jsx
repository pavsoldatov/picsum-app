import "./Button.scss";

const Button = ({ value, text, pageNum, setPageNum }) => {
  const title = `Page ${value}`;
  const ariaLabel = `Page Number ${value}`;

  const activeBtnClassname = (value, page) => {
    return +value === +page ? "pagination-button active" : "pagination-button";
  };
  const className = activeBtnClassname(value, pageNum);

  return (
    <button
      className={className}
      type="text"
      aria-label={ariaLabel}
      title={title}
      text={text}
      onClick={() => setPageNum(value)}
    >
      {text}
    </button>
  );
};

export default Button;
