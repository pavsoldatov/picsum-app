const PerPageInput = ({ changeItemsPerPage, placeholder }) => {
  return (
    <input
      type="number"
      max="12"
      min="4"
      // step="3"
      style={{ width: "60px", fontSize: "1.5rem", textAlign: "center" }}
      placeholder={placeholder}
      onChange={changeItemsPerPage}
    />
  );
};

export default PerPageInput;
