import { useState } from "react";
import FilterButton from "./FilterButton";

const FilterButtons = () => {
  const filterButtons = [
    { id: "0", text: "All" },
    { id: "1", text: "Favorites" },
  ];

  const [activeBtnId, setActiveBtnId] = useState("0");

  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {filterButtons.map((btn) => (
        <FilterButton
          id={btn.id}
          key={btn.id}
          text={btn.text}
          activeBtnId={activeBtnId}
          setActiveBtnId={setActiveBtnId}
        ></FilterButton>
      ))}
    </div>
  );
};

export default FilterButtons;
