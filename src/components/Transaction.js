import React from "react";

export default function Transaction({ transaction, deleteTransaction }) {
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span style={{ marginRight: 8 }}>
        {transaction.amount >= 0 ? "+" : "-"}
        {Math.abs(transaction.amount)}
      </span>
      {transaction.id && (
        <button onClick={() => deleteTransaction(transaction.id)}> X </button>
      )}
    </li>
  );
}
