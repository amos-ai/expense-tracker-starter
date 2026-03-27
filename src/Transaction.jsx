import { useState } from 'react';

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

function Transaction({ transaction: t, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ ...t });

  const handleSave = () => {
    if (!draft.description || !draft.amount) return;
    onEdit({ ...draft, amount: parseFloat(draft.amount) });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft({ ...t });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr>
        <td><input type="date" value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} /></td>
        <td><input type="text" value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} /></td>
        <td>
          <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </td>
        <td>
          <select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value })}>
            <option value="income">income</option>
            <option value="expense">expense</option>
          </select>
          <input type="number" value={draft.amount} onChange={(e) => setDraft({ ...draft, amount: e.target.value })} style={{ width: "80px", marginLeft: "4px" }} />
        </td>
        <td>
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{t.date}</td>
      <td>{t.description}</td>
      <td>{t.category}</td>
      <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
        {t.type === "income" ? "+" : "-"}${t.amount}
      </td>
      <td>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(t.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
