export default (state, action) => {
  const { level, time, date, records } = action.payload;
  switch(action.type){
    case 'add_record':
      return {
        ...state,
        records: [...state.records, { level, time, date }]
      }
    case 'update_records_data':
      return {
        ...state,
        records
      }
  }
}