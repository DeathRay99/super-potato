import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onInteraction} />
      <div className="modal">
        <header className="header">
          <h2>{props.error}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.onInteraction}>okay</button>
        </footer>
      </div>
    </div>
  );
};
export default ErrorModal;
