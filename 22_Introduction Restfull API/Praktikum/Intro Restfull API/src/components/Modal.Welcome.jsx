import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalWelcome() {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => setIsShow(false);
  useEffect(() => {
    setIsShow(true);
  }, []);
  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>Selamat datang di website ini!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}