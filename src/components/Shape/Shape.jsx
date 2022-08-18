import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/game-slice';
import classes from './Shape.module.css';

const Shape = (props) => {
    const {className: blockClass} = props;
    const { start: gameStarted } = useSelector(state => state.game);
    const dispatch = useDispatch();

    let type = props.type ?? 'placeholder';

    const onClickHandler = () => {
        if (gameStarted) {
            dispatch(gameActions.playerSelectsShape({type}));
        }
    }

    return (
        <div className={`${classes['outer-circle']} ${classes[type]} ${blockClass}`} onClick={onClickHandler}>
            <div className={classes['inner-circle']}></div>
        </div>
    );
}

export default Shape;