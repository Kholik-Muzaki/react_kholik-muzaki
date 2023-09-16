import "./App.css";
import CreateProduct from "./pages/CreateProduct";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(() => {
    setShow(true);
  }, []);
  
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the Create Product Page! You can add your products
        </Modal.Body>
      </Modal>
      <CreateProduct />
    </div>
  );
}

export default App;