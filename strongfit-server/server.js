import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './services/db.js';
import goalRoutes from './routes/goalRoutes.js';

dotenv.config();

const app =  express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()) ;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Сервер StrongFit працює!');
});

app.use('/api/goals', goalRoutes);

connectDB(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Сервер запущено на порту ${PORT}`);
    });
});
