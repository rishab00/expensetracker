import React, { useEffect, useState } from "react";

export default function IncomeExpense({ transactions }) {
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  useEffect(() => {
    let tempIncomes = 0;
    let tempExpenses = 0;
    transactions.forEach((transaction) => {
      const { id, amount } = transaction;
      if (!id) {
        return;
      }
      if (amount > 0) {
        tempIncomes += amount;
      } else {
        tempExpenses -= amount;
      }
    });
    setIncomes(tempIncomes);
    setExpenses(tempExpenses);
  }, [transactions]);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Incomes</h4>
        <p>
          {incomes > 0 && "+"}${incomes}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>
          {expenses > 0 && "-"}${Math.abs(expenses)}
        </p>
      </div>
    </div>
  );
}
