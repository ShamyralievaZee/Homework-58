import './App.css'
import Modal from "./Components/UI/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./Components/UI/Alert/Alert";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(true);

  const closeModalWindow = ()=>{
    setShowModal(false);
  };

  const closeAlert = () => {
        setShowAlert(false);
  };

  const modalButtons = [
        { type: 'primary', label: 'Continue', onClick: () => alert('Continue clicked') },
        { type: 'danger', label: 'Close', onClick: closeModalWindow },
  ];

  return (
      <>
          <Modal
              show={showModal}
              title='Some kinda modal title'
              closeModal={closeModalWindow}
              buttons={modalButtons}
              children='This is modal content'
          />
          <button className='btn btn-primary' onClick={() => setShowModal(!showModal)}>Modal</button>

          <div className="container mt-5">
              {showAlert && (
                  <Alert type="warning" onDismiss={closeAlert}>
                      This is a warning type alert
                  </Alert>
              )}
              <Alert type="success">This is a success type alert</Alert>
          </div>
      </>
  )
};

export default App
