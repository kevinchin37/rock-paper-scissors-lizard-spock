import { Fragment } from 'react';
import RulesSvg from '../../assets/image-rules-bonus.svg';
import CloseButton from '../../assets/icon-close.svg';
import Modal from '../Modal/Modal';
import classes from './RulesModal.module.css';

const RulesModal = (props) => {
    return (
        <Fragment>
            <Modal show={props.isShow}>
                <div className={classes['rules-modal']}>
                    <div className={classes.header}>
                        <span className={classes.title}>RULES</span>
                        <img src={CloseButton} className={classes['close-button']} onClick={props.hide} />
                    </div>
                    <img src={RulesSvg} />
                </div>
            </Modal>
        </Fragment>
    );
}

export default RulesModal;