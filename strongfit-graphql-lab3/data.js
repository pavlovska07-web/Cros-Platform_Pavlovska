export const users = [];

export const goals = [
    {
        id: "1",
        title: "Пробігти 5 км",
        description: "Підготуватись до весняного марафону",
        status: "В процесі",
        authorId: "1"
    }
];

let nextUserId = 1;
let nextGoalId = 2;

export const getNextUserId = () => {
    return String(nextUserId++);
};

export const getNextGoalId = () => {
    return String(nextGoalId++);
};