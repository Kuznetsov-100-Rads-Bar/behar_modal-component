import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import './Modal.style.css';

export default function Modal({ visible, title, content, onClose }) {
    const escapeCloseModal = (event) => {
        if (event.charcode === 27 || event.keyCode === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", escapeCloseModal);
        return () => {
            document.body.removeEventListener("keydown", escapeCloseModal);
        }
    }, []);

    const handleClose = () => {
        return onClose(true);
    }

    if (!title || !content) {
        return console.warn('Attention, le composant <Modal /> doit contenir un props : `title={\'modalTitle\'}, content={\'modalContent\'}`.');
    }
    if (!visible) {
        return <></>;
    }
    return ReactDOM.createPortal(
        <div className="modal-display">
            <div className='modal-container'>
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                </div>
                <div className="modal-content">
                    <p className="modal-body">{content}</p>
                </div>
                <button onClick={() => handleClose()} className="modal-close_button">Fermer</button>
            </div>
        </div>,
        document.body
    )
}
