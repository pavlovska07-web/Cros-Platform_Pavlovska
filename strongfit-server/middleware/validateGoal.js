export const validateGoal = (req, res, next) => {
    const { title } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'Назва цілі (title) є обов\'язковою!' });
    }

    next();
};