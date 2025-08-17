import { Prescription } from "../models/Prescription.js";

const prescriptionRepository = {
  create: async (data) => {
    const prescription = new Prescription(data);
    return await prescription.save();
  },

  findById: async (id) => {
    return await Prescription.findById(id);
  },

  findAll: async () => {
    return await Prescription.find();
  },

  update: async (id, data) => {
    return await Prescription.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id) => {
    return await Prescription.findByIdAndDelete(id);
  }
}

export default prescriptionRepository;
