import "../App.css";

export default function Button({ children }) {
  return (
    <>
      <button className="button" id="welcome-header-button">{children}</button>
    </>
  );
}
