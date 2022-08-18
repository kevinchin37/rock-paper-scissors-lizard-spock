import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/game-slice';
import StartButton from '../StartButton/StartButton';
import Pulse from '../Shape/Pulse';
import Shape from '../Shape/Shape';
import { SHOW_RESULT_TIME, SHOW_PICK_TIMER } from '../../config';
import useTimeout from '../hooks/use-timeout';
import classes from './Results.module.css';

const Results = () => {
    const dispatch = useDispatch();
    const { playerShape, computerShape, isPlayerWinner, isDraw } = useSelector(state => state.game);

    useEffect(() => {
        dispatch(gameActions.setWinner());

        setTimeout(() => {
            dispatch(gameActions.updateScore());
        }, SHOW_RESULT_TIME);
    }, [dispatch]);

    const { isShow: showWinner } = useTimeout(SHOW_RESULT_TIME);
    const { isShow: showComputerPick } = useTimeout(SHOW_PICK_TIMER);

    let computerPick = showComputerPick ? computerShape : 'placeholder';

    let resultMessage = isPlayerWinner ? 'YOU WIN' : 'YOU LOSE';
    if (isDraw) resultMessage = 'DRAW';

   return (
       <main className={classes.results}>
            <div id={classes.playerPick} className={classes['mobile-column-reverse']}>
                <h1 className={classes.title}>YOU PICKED</h1>
                <Pulse enable={isPlayerWinner && !isDraw}>
                    <Shape className={classes.shape} type={playerShape} />
                </Pulse>
            </div>

            <div className={`${classes['final-results']} ${showWinner ? classes.show : ''}`}>
                <p className={classes.status}>{resultMessage}</p>
                <StartButton>Play Again</StartButton>
            </div>

            <div id={classes.computerPick} className={classes['mobile-column-reverse']}>
                <h1 className={classes.title}>THE HOUSE PICKED</h1>
                <Pulse enable={!isPlayerWinner && !isDraw}>
                    <Shape className={classes.shape} type={computerPick} />
                </Pulse>
            </div>
       </main>
   );
}

export default Results;