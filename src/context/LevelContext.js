import createDataContext from "./createDataContext";
import LevelReducer from "../reducers/Level.reducer";
import sudokuGenerator from "../utils/sudokuGenerator";
import levels from '../constants/levelsConfig.json';
import { navigate } from "../NavigationRef";

const initializeNewGame = dispatch => payload => {
  const {level} = payload;
  const {puzzle, solution } = sudokuGenerator(level);
  dispatch({type: 'initialize_game', payload: { puzzle, solution, level }});
  navigate("Game", {level});
}

const updatePendingGame = dispatch => (payload, callback) => {
  console.log('updating!!', payload.timer)
  dispatch({ type: 'update_pending_game', payload })
  if(callback) callback();
}

const updatePendingGameTimer = dispatch => (payload, callback) => {
  dispatch({ type: 'update_pending_game_timer', payload })
  if(callback) callback();
}

const updateLevelsData = dispatch => (payload) => {
  dispatch({ type: 'update_levels_data', payload })
}

const refreshAfterWinning = dispatch => (payload, callback) => {
  dispatch({ type: 'refresh_after_winning', payload });
  if(callback) {
    callback()
  };
}

const initialState = {levels: levels.map(l => ({...l, pendingGame: {}}))};

export const {Context, Provider} = createDataContext(LevelReducer, {initializeNewGame, updatePendingGame, updateLevelsData, refreshAfterWinning, updatePendingGameTimer}, initialState);