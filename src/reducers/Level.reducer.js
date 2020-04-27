export default (state, action) => {
  const { puzzle, solution, level, timer, levels } = action.payload;
  switch (action.type) {
    case 'initialize_game':
      return {
        ...state,
        levels: state.levels.map(l => {
          if(l.title === level){
            return { ...l, pendingGame: {puzzle, solution, timer: 0} }
          } else {
            return l;
          }
        })
      };
    case 'update_pending_game': 
      return {
        ...state,
        levels: state.levels.map(l => {
          if(l.title === level){
            return { ...l, pendingGame: { puzzle, solution, timer } }
          } else {
            return l;
          }
        })
      }
    case 'update_pending_game_timer': 
      return {
        ...state,
        levels: state.levels.map(l => {
          if(l.title === level){
            return { ...l, pendingGame: { ...l.pendingGame, timer: timer } }
          } else {
            return l;
          }
        })
      }
    case 'refresh_after_winning':
      return {
        ...state,
        levels: state.levels.map(l => {
          if(l.title === level){
            return { ...l, pendingGame: {} }
          } else {
            return l;
          }
        })
      }
    case 'update_levels_data':
      return {
        ...state,
        levels
      }
    default:
      return state;
      break;
  }
}