import { Patient } from '../models/Patient.js';

const patientRepository = {
  create: async (data) => {
    const patient = new Patient(data);
    return await patient.save();
  },

  findById: async (id) => {
    return await Patient.findById(id);
  },

  findAll: async () => {
    return await Patient.find();
  },

  update: async (id, data) => {
    return await Patient.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Patient.findByIdAndDelete(id);
  }
}

export default patientRepository;