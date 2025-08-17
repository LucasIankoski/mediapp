import { Doctor } from '../models/Doctor.js';

const doctorRepository = {
  create: async (data) => {
    const doctor = new Doctor(data);
    return await doctor.save();
  },

  findById: async (id) => {
    return await Doctor.findById(id);
  },

  findAll: async () => {
    return await Doctor.find();
  },

  update: async (id, data) => {
    return await Doctor.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Doctor.findByIdAndDelete(id);
  }
}

export default doctorRepository;
