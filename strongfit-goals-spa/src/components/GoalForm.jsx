import { useState } from "react";

export default function GoalForm({ onAdd }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Кардіо");

    const handleSubmit = (e) => {
        e.preventDefault();
        const isAdded = onAdd(text, category);
        if (isAdded) {
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3">
            <div className="flex gap-3 max-sm:flex-col">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Введіть нову фітнес-ціль (напр. Пробігти 5 км)..."
                    aria-label="Текст фітнес-цілі"
                    className="flex-1 rounded-lg border border-purple-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-lg border border-purple-300 px-4 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                >
                    <option value="Кардіо">Кардіо</option>
                    <option value="Силове">Силове</option>
                    <option value="Розтяжка">Розтяжка</option>
                    <option value="Харчування">Харчування</option>
                </select>
            </div>
            <button
                type="submit"
                className="cursor-pointer rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white hover:bg-purple-700 transition-colors shadow-md"
            >
                Додати до списку цілей
            </button>
        </form>
    );
}