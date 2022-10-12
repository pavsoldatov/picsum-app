import "./FilterButton.scss";

const FilterButton = ({ value, text, id, activeBtnId, setActiveBtnId }) => {
  const title = `Show ${text.toLowerCase()}`;
  const ariaLabel = `Page Number ${value}`;

  const handleClick = () => {
    setActiveBtnId(id);
  };

  return (
    <button
      className={activeBtnId === id ? "filter-button active" : "filter-button"}
      type="text"
      aria-label={ariaLabel}
      title={title}
      text={text}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
