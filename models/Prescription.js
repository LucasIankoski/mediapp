import { mongoose } from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    appointmentId: {
        type: String,
        required: [true, 'Appointment ID is required']
    },
    medication: {
        type: String,
        required: [true, 'Medication is required']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;