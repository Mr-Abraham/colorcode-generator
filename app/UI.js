function UserInterface({ color, changeClr }) {
  return (
    <div className="userInterface">
      <h1 style={{ color: color }}>{color}</h1>
      <button onClick={changeClr}>Change Color</button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(color);
          alert("You Copied The Color Code Successfully");
        }}
      >
        Copy Color Code
      </button>
    </div>
  );
}
export default UserInterface;
