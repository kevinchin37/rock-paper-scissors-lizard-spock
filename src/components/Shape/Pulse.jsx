import { useState, useEffect } from 'react';
import classes from './Pulse.module.css';

const Pulse = (props) => {
    const [showPulse, setShowPulse] = useState(false);
    const activeClass = (props.enable && showPulse) ? classes.active : '';

    useEffect(() => {
        const showPulseTimer = setTimeout(() => {
            setShowPulse(true);
        }, 3000);

        return () => {
            clearTimeout(showPulseTimer);
        }
    }, [showPulse]);

    return (
        <div className={classes['pulse-container']}>
            <div className={`${classes.pulse} ${activeClass}`}></div>
            {props.children}
        </div>
    );
}

export default Pulse;