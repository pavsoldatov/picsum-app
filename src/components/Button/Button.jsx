import "./Button.scss";

const Button = ({value, text, setPageNum}) => {
  const title = `Page ${value}`
  const ariaLabel = `Page Number ${value}`

  return (
    <button
      className="pagination-button"
      type="text"
      aria-label={ariaLabel}
      title={title}
      text={text}
      onClick={() => setPageNum(value)}
    >{text}</button>
  );
};

export default Button;
