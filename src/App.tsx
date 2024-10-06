import './App.css'
import Modal from "./Components/UI/Modal/Modal.tsx";
import {useState} from "react";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = ()=>{
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} title='New title' closeModal={closeModalWindow}/>
      <button className='btn btn-primary' onClick={() => setShowModal(!showModal)}>Modal</button>
      </>
      )
};

export default App
