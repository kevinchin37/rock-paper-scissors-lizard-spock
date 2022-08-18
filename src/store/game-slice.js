import { createSlice } from '@reduxjs/toolkit';

const GAME_SHAPES = {
    'rock': {
        'weakness': ['paper', 'spock']
    },
    'paper': {
        'weakness': ['scissors', 'lizard']
    },
    'scissors': {
        'weakness': ['rock', 'spock']
    },
    'lizard': {
        'weakness': ['rock', 'scissors']
    },
    'spock': {
        'weakness': ['paper', 'lizard']
    },
};

const initialState = {
    initialLoad: true,
    start: false,
    isPlayerWinner: null,
    playerShape: null,
    computerShape: null,
    isDraw: null,
    score: 0,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: (state) => {
            // reset
            return {
                ...initialState,
                start: true,
                initialLoad: false,
                score: state.score,
            };
        },

        playerSelectsShape: (state, action) => {
            state.playerShape = action.payload.type;;
        },

        computerSelectsShape: (state) => {
            const availableShapes = Object.keys(GAME_SHAPES);
            const random = Math.floor((Math.random() * 4));
            state.computerShape = availableShapes[random];
        },

        setWinner: (state) => {
            state.start = false;

            if (state.playerShape !== state.computerShape) {
                const isComputerWinner = GAME_SHAPES[state.playerShape].weakness.includes(state.computerShape);
                if (isComputerWinner) {
                    state.isPlayerWinner = false;
                } else {
                    state.isPlayerWinner = true;
                }
            } else {
                state.isDraw = true;
            }
        },

        updateScore: (state) => {
            if (state.isPlayerWinner) {
                state.score++;
            }
        }
    }
});

export const gameActions = gameSlice.actions;
export default gameSlice;