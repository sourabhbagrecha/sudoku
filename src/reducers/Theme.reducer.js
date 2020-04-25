export default (state, action) => {
  switch (action.type) {
    case 'change_theme':
      return {...state, currentTheme: action.payload.theme};
    default:
      return state;
      break;
  }
}