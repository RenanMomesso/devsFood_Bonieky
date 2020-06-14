import React from "react";

import { Container, ModalBody } from "./styled";

function Modal({ status,children,setStatus }) {

    const handleModalClick = e => {
        if(e.target.classList.contains('modalBg')){
            setStatus(false)
        }
    }

  return (
    <Container className="modalBg" status={status} onClick={handleModalClick}>
      <ModalBody>{children}  </ModalBody>
    </Container>
  );
}

export default Modal;
