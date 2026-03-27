function Transaction({ transaction: t, onDelete }) {
  return (
    <tr>
      <td>{t.date}</td>
      <td>{t.description}</td>
      <td>{t.category}</td>
      <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
        {t.type === "income" ? "+" : "-"}${t.amount}
      </td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(t.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
