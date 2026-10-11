import bcrypt from 'bcryptjs';
import { users, goals, getNextUserId, getNextGoalId } from './data.js';
import { createToken } from './auth.js';

export const resolvers = {
    Query: {
        users: () => users,
        me: (_, __, context) => context.user,
        goals: () => goals
    },

    Goal: {
        author: (parent) => users.find((u) => u.id === parent.authorId)
    },

    Mutation: {
        register: async (_, { name, email, password }) => {
            const existingUser = users.find((u) => u.email === email);
            if (existingUser) {
                throw new Error('Користувач з таким email вже існує.');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                id: getNextUserId(),
                name,
                email,
                password: hashedPassword
            };

            users.push(newUser);
            const token = createToken(newUser);

            return { token, user: newUser };
        },

        login: async (_, { email, password }) => {
            const user = users.find((u) => u.email === email);
            if (!user) {
                throw new Error('Невірний email або пароль.');
            }

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                throw new Error('Невірний email або пароль.');
            }

            const token = createToken(user);
            return { token, user };
        },

        createGoal: (_, { title, description = '', status = 'В процесі' }, context) => {
            if (!context.user) {
                throw new Error('Потрібна авторизація.');
            }

            const newGoal = {
                id: getNextGoalId(),
                title,
                description,
                status,
                authorId: context.user.id
            };

            goals.push(newGoal);
            return newGoal;
        },

        deleteGoal: (_, { id }, context) => {
            if (!context.user) {
                throw new Error('Потрібна авторизація.');
            }

            const index = goals.findIndex((g) => g.id === id);
            if (index === -1) {
                return false;
            }

            goals.splice(index, 1);
            return true;
        }
    }
};