import './App.css'
import Modal from "./Components/UI/Modal/Modal.tsx";
import {useState} from "react";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = ()=>{
    setShowModal(false);
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
      <button className='btn btn-primary' onClick={() => setShowModal(!showModal)}>
          Modal
      </button>
      </>
      )
};

export default App
