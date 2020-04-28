import createDataContext from "./createDataContext";
import RecordReducer from "../reducers/Record.reducer";

const addRecord = (dispatch) => async (payload) => {
  dispatch({ type: "add_record", payload })
};

const updateRecordsData = (dispatch) => async (payload) => {
  dispatch({ type: "update_records_data", payload })
};

let initialState = {
  records: []
};

export const {Context, Provider} = createDataContext( RecordReducer, { addRecord, updateRecordsData }, initialState );