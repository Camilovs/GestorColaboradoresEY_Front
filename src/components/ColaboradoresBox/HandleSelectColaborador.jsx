export const HandleSelectColaborador = ({
  children,
  addColaborador,
  user,
  isSelected,
}) => {
  const handleSelect = () => {
    addColaborador(user.correo);
  };
  return (
    <div
      style={{
        cursor: "pointer",
        height: "100%",
        border: isSelected && "2px solid #1976d2",
      }}
      onClick={handleSelect}
    >
      {children}
    </div>
  );
};
