import createDataContext from "./createDataContext";
import sudokuGenerator from "../utils/sudokuGenerator";
import GameReducer from "../reducers/Game.reducer";

const setClicked = dispatch => (payload, callback) => {
  dispatch({ type: "set_clicked", payload });
  if(callback) callback();
};

const setFocused = dispatch => (payload) => {
  dispatch({ type: "set_focused", payload });
};

const enterNumber = dispatch => (payload, callback) => {
  dispatch({ type: "enter_number", payload});
  if(callback) callback();
};

const resetConsoleFocus = dispatch => (payload, callback) => {
  dispatch({ type: "reset_console_focus", payload });
  if(callback) callback();
};

const resetBoardFocus = dispatch => (payload) => {
  dispatch({ type: "reset_board_focus", payload });
};

const changeLevel = dispatch => (payload) => {
  dispatch({ type: "change_level", payload });
}

const { puzzle, solution } = sudokuGenerator("Medium");

const initialState = {
  board: puzzle,
  solution,
  nums: Array(10).fill(0).map((_, i) => ({
    num: i,
    isFocused: false
  })),
  level: "Medium"
};

export const {Context, Provider} = createDataContext(
  GameReducer, 
  {setFocused, setClicked, enterNumber, resetConsoleFocus, resetBoardFocus, changeLevel}, 
  initialState
);