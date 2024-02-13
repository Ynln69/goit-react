import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.tr}>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
