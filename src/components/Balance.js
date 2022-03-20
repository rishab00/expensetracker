import React from "react";

export default function Balance({ transactions }) {
  //const [total, setTotal] = useState(1000)
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, value) => acc + value, 0);
  return (
    <div>
      <h3 className="container">Your Balance</h3>
      <h1>
        {total < 0 && "-"}${Math.abs(total)}
      </h1>
    </div>
  );
}
