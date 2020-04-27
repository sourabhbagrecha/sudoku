import createDataContext from "./createDataContext";
import ThemeReducer from "../reducers/Theme.reducer";
import { AsyncStorage } from "react-native";

const changeTheme = (dispatch) => async(payload) => {
  dispatch({ type: 'change_theme', payload });
  await AsyncStorage.setItem("theme", payload.theme)
};

let initialState = {
  currentTheme: "black"
};

export const {Context, Provider} = createDataContext( ThemeReducer, { changeTheme }, initialState );