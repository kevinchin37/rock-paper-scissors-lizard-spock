import { Fragment, useState } from 'react';
import classes from './RulesButton.module.css';
import RulesModal from './RulesModal';

const RulesButton = () => {
    const [showRules, setShowRules] = useState(false);

    const showModalHandler = () => {
        setShowRules(true);
    }

    const hideModalHandler = () => {
        setShowRules(false);
    }

    return (
        <Fragment>
            <RulesModal isShow={showRules} hide={hideModalHandler}/>
            <button className={classes['rules-button']} onClick={showModalHandler}>RULES</button>
        </Fragment>
    );
}

export default RulesButton;