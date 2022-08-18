import { useDispatch } from 'react-redux';
import { gameActions } from '../../store/game-slice';
import classes from './StartButton.module.css';

const StartButton = (props) => {
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(gameActions.startGame());
    }

    return (
        <button className={classes['button']} onClick={startGameHandler}>
            {props.children}
        </button>
    )
}

export default StartButton;