export default function Header({ total, done }) {
    return (
        <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                StrongFit Goals SPA
            </h1>
            <p className="text-slate-600 font-medium">
                Усього цілей: <span className="font-bold text-slate-700">{total}</span> · Виконано: <span className="font-bold text-slate-700">{done}</span>
            </p>
        </header>
    );
}
