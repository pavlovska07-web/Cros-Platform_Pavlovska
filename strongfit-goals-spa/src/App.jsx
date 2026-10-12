import { useState, useEffect } from "react";
import Header from "./components/Header";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

const STORAGE_KEY = "strongfit-goals-data";

const loadGoals = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Помилка читання з localStorage:", error);
    return [];
  }
};

export default function App() {
  const [goals, setGoals] = useState(loadGoals);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  // Додано підтримку категорії
  const addGoal = (text, category) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      setMessage({ text: "Будь ласка, введіть текст фітнес-цілі!", type: "error" });
      return false;
    }

    const newGoal = {
      id: Date.now(),
      text: trimmedText,
      category: category || "Кардіо",
      done: false,
    };

    setGoals((prev) => [newGoal, ...prev]);
    setMessage({ text: "Фітнес-ціль успішно додано!", type: "success" });
    return true;
  };

  const toggleGoal = (id) => {
    setGoals((prev) =>
        prev.map((g) => (g.id === id ? { ...g, done: !g.done } : g))
    );
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
    setMessage({ text: "Фітнес-ціль видалено.", type: "success" });
  };

  const totalGoals = goals.length;
  const doneGoals = goals.filter((g) => g.done).length;

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-300 via-indigo-200 to-sky-300 px-4 py-8 text-slate-800 antialiased">
        <main className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl border border-violet-100">
          <Header total={totalGoals} done={doneGoals} />

          <GoalForm onAdd={addGoal} />

          {message && (
              <div
                  className={`mb-5 rounded-lg p-3 text-center text-sm font-semibold transition-all ${
                      message.type === "error"
                          ? "bg-rose-100 text-rose-700 border border-rose-200"
                          : "bg-violet-100 text-violet-800 border border-violet-200"
                  }`}
              >
                {message.text}
              </div>
          )}

          <GoalList goals={goals} onToggle={toggleGoal} onDelete={deleteGoal} />
        </main>
      </div>
  );
}