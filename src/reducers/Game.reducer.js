export default (state, action) => {
  const {x, y, num, isFocused, isClicked} = action.payload;
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
            if(b.num === num){
              return {...b, num: 0, isClicked: false}
            } else {
              return {...b, num, isClicked: false}
            }
          } else {
            return b
          }
        }))
      }
    case 'reset_console_focus':
      return {
        ...state, 
        nums: state.nums.map(n => ({...n, isFocused: false}))
      }
    case 'reset_board_focus':
      return {
        ...state,
        board: state.board.map(row => (row.map(cell => ({...cell, isFocused: false}) )))
      }
    default: 
      return state
  }
};