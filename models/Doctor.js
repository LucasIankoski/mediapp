import { mongoose } from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Doctor name is required']
    },
    registration: {
        type: String,
        required: [true, 'Doctor registration is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Doctor email is required'],
        unique: true
    },    
    phone: {
        type: String,
        required: [true, 'Doctor phone is required']
    },    
    login: {
        type: String,
        required: [true, 'Doctor login is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Doctor password is required']
    },
    specialty: {
        type: String,
        required: [true, 'Doctor specialty is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const doctor = mongoose.model('Doctor', doctorSchema);

export default doctor;