export default function GoalItem({ goal, onToggle, onDelete }) {
    return (
        <li
            className={`flex items-center justify-between gap-3 rounded-xl p-4 transition-all shadow-sm ${
                goal.done ? "bg-indigo-100 opacity-80" : "bg-indigo-50 border border-indigo-100"
            }`}
        >
            <label className="flex items-center gap-3 flex-1 cursor-pointer select-none">
                <input
                    type="checkbox"
                    checked={goal.done}
                    onChange={() => onToggle(goal.id)}
                    className="h-5 w-5 accent-indigo-600 cursor-pointer rounded"
                />
                <span
                    className={`text-base font-medium transition-all ${
                        goal.done ? "text-slate-500 line-through" : "text-slate-800"
                    }`}
                >
                    {goal.text}
                </span>
                <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-semibold text-purple-800">
                    {goal.category}
                </span>
            </label>
            <button
                onClick={() => onDelete(goal.id)}
                className="cursor-pointer rounded-lg bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition-colors"
            >
                Видалити
            </button>
        </li>
    );
}