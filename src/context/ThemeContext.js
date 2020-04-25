import createDataContext from "./createDataContext";
import ThemeReducer from "../reducers/Theme.reducer";

const changeTheme = (dispatch) => (payload) => {
  console.log({payload});
  dispatch({ type: 'change_theme', payload });
};

const initialState = {
  currentTheme: "white"
};

export const {Context, Provider} = createDataContext( ThemeReducer, { changeTheme }, initialState );