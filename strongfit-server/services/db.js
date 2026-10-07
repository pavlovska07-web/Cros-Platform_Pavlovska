import mongoose from 'mongoose';

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Підключено до MongoDB Atlas (StrongFit)');
    } catch (error) {
        console.error('Помилка підключення до бази даних:', error.message);
        process.exit(1);
    }
};