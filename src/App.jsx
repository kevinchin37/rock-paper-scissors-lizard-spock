import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StartButton from './components/StartButton/StartButton';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import ShapeContainer from './components/Shape/ShapeContainer';
import { gameActions } from './store/game-slice';
import RulesButton from './components/Rules/RulesButton';

function App() {
    const { initialLoad, start: gameStarted, playerShape, computerShape } = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!initialLoad && playerShape) {
            dispatch(gameActions.computerSelectsShape());
        }
    }, [playerShape, dispatch]);

    let mainView = '';
    if (initialLoad) {
        mainView = (
            <section>
                <StartButton>Start Game</StartButton>
            </section>
        );
    }

    if (!initialLoad && gameStarted) {
        mainView = <ShapeContainer />;
    }

    if (playerShape && computerShape) {
        mainView = <Results />;
    }

    return (
        <section>
            <Header />
            {mainView}
            <RulesButton />
        </section>
    );
}

export default App
