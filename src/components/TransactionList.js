import React from "react";
import Transaction from "../components/Transaction";

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
}
