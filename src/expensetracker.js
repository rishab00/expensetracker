import React, { useEffect } from "react";
import { connect } from "react-redux";
import Balance from "./components/Balance";
import AddTransactions from "./components/Addtransactions";
import TransactionList from "./components/TransactionList";
import IncomeExpense from "./components/IncomeExpense";

import PropTypes from "prop-types";
import { addTransaction, deleteTransaction } from "./stores/Actions/action";

const expenseTracker = ({
  transactions,
  addTransaction,
  deleteTransaction,
}) => {
  return (
    <div>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransactions
        transactions={transactions}
        addTransaction={addTransaction}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
});

expenseTracker.propTypes = {
  transactions: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(expenseTracker);
