import React, { useState } from "react";

export default function AddTransactions({ transactions, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransactions = {
      id: transactions.length ? transactions.length : 1,
      text: text,
      amount: +amount,
    };
    addTransaction(newTransactions);
  };
  return (
    <div>
      <h3>Add Transactions</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text"
            type="text"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Text"
            type="number"
          />
        </div>
        <div>
          <label>Select the type:</label>
          <input type="radio" /> Income
          <input type="radio" /> Expense
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
