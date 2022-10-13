import "./FilterButton.scss";

const FilterButton = ({
  value,
  text,
  id,
  activeBtnId,
  setActiveBtnId,
  activeFilter,
  setActiveFilter,
}) => {
  const title = `Show ${text.toLowerCase()}`;
  const ariaLabel = `Page Number ${value}`;

  const handleClick = () => {
    setActiveFilter(text)
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
