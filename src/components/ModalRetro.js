import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: "15",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "none",
  },
};

Modal.setAppElement("#root");

function ModalRetro(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Retro Modal"
      // className="tui-overlap"
    >
      <div className="tui-window blue-168 ">
        <fieldset className="tui-fieldset">
          <legend className="purple-bg black-text">{props.title}</legend>
          {props.children}
          <br />
          <br />
          <div className="tui-divider"></div>
          <br />
          <button
            className="tui-button purple-bg black-text tui-modal-close-button "
            onClick={props.closeModal}
          >
            close
          </button>
        </fieldset>
      </div>
    </Modal>
  );
}

export default ModalRetro;
