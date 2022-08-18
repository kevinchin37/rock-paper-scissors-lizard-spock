import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Overlay = () => {
    return <div className={classes.overlay}></div>;
}

const Modal = (props) => {
    const modalContent = props.show && (
        <Fragment>
            <Overlay></Overlay>
            <div className={classes.modal}>
                {props.children}
            </div>
        </Fragment>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root')
    );
}

export default Modal;