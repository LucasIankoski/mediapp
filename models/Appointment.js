import { mongoose } from 'mongoose';
import { isValidObjectId } from '../utils/validators.js';

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Appointment date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required'],
        validate: {
            validator: isValidObjectId,
            message: props => `${props.value} is not a valid Doctor ID!`
        }
    },
    patientId: {
        type: String,
        required: [true, 'Patient ID is required'],
        validate: {
            validator: isValidObjectId,
            message: props => `${props.value} is not a valid Patient ID!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;