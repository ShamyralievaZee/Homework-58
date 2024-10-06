import Backdrop from "../Backdrop/Backdrop.tsx";
import * as React from "react";

interface Props extends React.PropsWithChildren{
    show: boolean;
    title?: string;
    closeModal: () => void;

}

const Modal: React.FC<Props> = ({show,title='Modal title', children,closeModal}) => {
    return (
        <>
            <Backdrop show={show}/>
            <div className="modal show" style={{display: show? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content p-4">
                        <div className="modal-header flex justify-content-between">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button onClick={closeModal}>X</button>
                        </div>
                        <div className="p-2">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;