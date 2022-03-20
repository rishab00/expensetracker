import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../Actions/action";

const initialState = {
  transactions: [{ amount: 1000 }],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default expenseReducer;
