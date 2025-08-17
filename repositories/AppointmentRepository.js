import { Appointment } from '../models/Appointment.js';

const appointmentRepository = {
  create: async (data) => {
    const appointment = new Appointment(data);
    return await appointment.save();
  },

  findById: async (id) => {
    return await Appointment.findById(id);
  },

  findAll: async () => {
    return await Appointment.find();
  },

  update: async (id, data) => {
    return await Appointment.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Appointment.findByIdAndDelete(id);
  }
}

export default appointmentRepository;
