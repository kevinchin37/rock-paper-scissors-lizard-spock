import { useSelector } from "react-redux";
import classes from './Score.module.css';

const Score = () => {
    const score = useSelector(state => state.game.score);

    return (
        <div className={classes.score}>
            <span className={classes.title}>SCORE</span>
            <span className={classes['player-score']}>{score}</span>
        </div>
    );
}

export default Score;