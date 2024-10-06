import Backdrop from "../Backdrop/Backdrop";
import * as React from "react";

interface ButtonConfig {
    type: string;
    label: string;
    onClick: () => void;
}

interface Props extends React.PropsWithChildren {
    show: boolean;
    title?: string;
    closeModal: () => void;
    buttons?: ButtonConfig[];
}

const Modal: React.FC<Props> = ({ show, title = 'Modal title', children, closeModal, buttons }) => {
    return (
        <>
            <Backdrop show={show}/>
            <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content p-4">
                        <div className="modal-header flex justify-content-between">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button onClick={closeModal} className='bg-white p-2'>X</button>
                        </div>
                        <div className="p-2">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {buttons?.map((btn, index) => (
                                <button key={index} className={`btn btn-${btn.type}`} onClick={btn.onClick}>
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
