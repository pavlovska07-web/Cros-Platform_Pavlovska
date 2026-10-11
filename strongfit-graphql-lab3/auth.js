import jwt from 'jsonwebtoken';
import { users } from './data.js';

export const JWT_SECRET = 'strongfit_secret_key_2026';

export const createToken = (user) => {
    return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
};

export const getUserFromToken = (token) => {
    try {
        if (!token) return null;
        const decoded = jwt.verify(token, JWT_SECRET);
        return users.find((u) => u.id === decoded.userId) || null;
    } catch (err) {
        return null;
    }
};

export const getUserFromAuthHeader = (authHeader) => {
    if (!authHeader) return null;
    const token = authHeader.replace('Bearer ', '').trim();
    return getUserFromToken(token);
};