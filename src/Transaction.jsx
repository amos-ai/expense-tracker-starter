function Transaction({ transaction: t }) {
  return (
    <tr>
      <td>{t.date}</td>
      <td>{t.description}</td>
      <td>{t.category}</td>
      <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
        {t.type === "income" ? "+" : "-"}${t.amount}
      </td>
    </tr>
  );
}

export default Transaction;
