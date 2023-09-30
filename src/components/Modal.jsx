import { useRef } from "react";
import { createPortal } from "react-dom";
import NewChallenge from "./NewChallenge";

export default function Modal({ toggleModal }) {
  const modalContent = useRef(null);
  function exitModal(e) {
    if (modalContent.current && !modalContent.current.contains(e.target)) {
      toggleModal();
    }
  }

  return createPortal(
    <div style={overlayStyle} onClick={exitModal}>
      <div style={modalWhiteBoxStyle} ref={modalContent}>
        {/* <h2>Add Challege Form Box</h2> */}
        <NewChallenge closeModal={toggleModal} />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.1)",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  padding: "2rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
};

export const modalWhiteBoxStyle = {
  backgroundColor: "white",
  height: "100%",
  minHeight: "80%",
  minWidth: "50%",
  borderRadius: "10px",
  display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  flexDirection: "column",
  // paddingBottom : "2rem",
  overflowY: "auto",
};
