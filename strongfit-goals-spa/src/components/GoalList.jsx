import { useState } from "react";
import GoalItem from "./GoalItem";

export default function GoalList({ goals, onToggle, onDelete }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Всі");

    // Фільтрація масиву "на льоту"
    const filteredGoals = goals.filter((goal) => {
        const matchesSearch = goal.text.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "Всі" || goal.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <div className="mb-5 flex gap-3 max-sm:flex-col">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Пошук цілі..."
                    className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
                >
                    <option value="Всі">Усі категорії</option>
                    <option value="Кардіо">Кардіо</option>
                    <option value="Силове">Силове</option>
                    <option value="Розтяжка">Розтяжка</option>
                    <option value="Харчування">Харчування</option>
                </select>
            </div>

            {/* Список елементів */}
            {filteredGoals.length === 0 ? (
                <p className="text-center text-slate-500 py-6 italic">
                    {goals.length === 0
                        ? "Фітнес-цілей поки немає. Додайте першу ціль!"
                        : "За вказаними критеріями цілей не знайдено."}
                </p>
            ) : (
                <ul className="space-y-3">
                    {filteredGoals.map((goal) => (
                        <GoalItem
                            key={goal.id}
                            goal={goal}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}