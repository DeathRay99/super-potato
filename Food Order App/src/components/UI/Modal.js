import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <Backdrop onClick={props.hideCart} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
}

export default Modal;
