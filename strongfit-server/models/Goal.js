import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Назва цілі є обов\'язковою'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    status: {
        type: String,
        enum: ['В процесі', 'Виконано'],
        default: 'В процесі'
    }
}, { timestamps: true });

export default mongoose.model('Goal', goalSchema);