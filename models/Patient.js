import { mongoose } from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Patient name is required']
    },
    birthDate: {
        type: Date,
        required: [true, 'Patient birth date is required']
    },
    email: {
        type: String,
        required: [true, 'Patient email is required'],
        unique: true
    },    
    phone: {
        type: String,
        required: [true, 'Patient phone is required']
    },    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const patient = mongoose.model('Patient', patientSchema);

export default patient;