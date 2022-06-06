import React, { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import './Modal.css';

interface ModalProps {
    modalStyle: any,
    children: string,
    show: boolean,
    backdropStyle: any,
    onClose: () => void;
}

const Modal = (props: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(
        () => {
            if (modalRef.current && props.show) {
                modalRef.current.classList.add('visible');
            }
            else if (modalRef.current) {
                modalRef.current.classList.remove('visible');
            }
        },
        [
            props.show
        ]
    );
    return <React.Fragment>
        <div ref={modalRef} style={props.backdropStyle} className='modal__wrap'>
            <Button
                onClick={props.onClose}
                label='Close'
                class='cls-btn'
            />
            <div style={props.modalStyle} className='modal'>
                {props.children}
            </div>
        </div>
    </React.Fragment>
}

export default Modal;