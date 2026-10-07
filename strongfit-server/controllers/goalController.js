import Goal from '../models/Goal.js';

export const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find().sort({ createdAt: -1 }); // Нові зверху
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: 'Помилка сервера', error: error.message });
    }
};

export const getGoalById = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) {
            return res.status(404).json({ message: 'Ціль не знайдено' });
        }
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: 'Помилка сервера', error: error.message });
    }
};

export const createGoal = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const newGoal = await Goal.create({ title, description, status });
        res.status(201).json(newGoal);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні', error: error.message });
    }
};

export const updateGoal = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const updatedGoal = await Goal.findByIdAndUpdate(
            req.params.id,
            { title, description, status },
            { new: true, runValidators: true }
        );

        if (!updatedGoal) {
            return res.status(404).json({ message: 'Ціль не знайдено' });
        }
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при оновленні', error: error.message });
    }
};

export const deleteGoal = async (req, res) => {
    try {
        const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
        if (!deletedGoal) {
            return res.status(404).json({ message: 'Ціль не знайдено' });
        }
        res.status(200).json({ message: 'Ціль успішно видалено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при видаленні', error: error.message });
    }
};