import createDataContext from "./createDataContext";
import sudokuGenerator from "../utils/sudokuGenerator";

const GameReducer = (state, action) => {
  const {x, y, num, isFocused} = action.payload;
  switch(action.type){
    case 'set_focused': 
      return {
        ...state,
        nums: state.nums.map(button => {
          if(button.num === num){
            return {...button, isFocused: true}
          } else {
            return {...button, isFocused: false}
          }
        }),
        board: state.board.map(row => row.map(b => {
          if(b.num === num){
            return {...b, isFocused: true}
          } else {
            return {...b, isFocused: false}
          }
        }))
      }
    case 'set_clicked': 
      return {
        ...state,
        board: state.board.map(row => row.map(b => {
          if(b.x === x && b.y === y){
            return {...b, isFocused: false, isClicked: true}
          } else {
            return {...b, isFocused: false, isClicked: false}
          }
        }))
      }
    case 'enter_number':
      return {
        ...state,
        board: state.board.map(row => row.map(b => {
          if(b.isClicked === true){
            return {...b, num: num, isClicked: false}
          } else {
            return b
          }
        }))
      }
    default: 
      return state
  }
};

const setClicked = dispatch => (payload) => {
  dispatch({ type: "set_clicked", payload });
}

const setFocused = dispatch => (payload) => {
  dispatch({ type: "set_focused", payload });
};

const enterNumber = dispatch => (payload) => {
  dispatch({ type: "enter_number", payload});
};

const { puzzle, solution } = sudokuGenerator();

const initialState = {
  board: puzzle,
  solution,
  nums: Array(9).fill(0).map((_, i) => ({
    num: i+1,
    isFocused: false
  }))
};

export const {Context, Provider} = createDataContext(GameReducer, {setFocused, setClicked, enterNumber}, initialState);