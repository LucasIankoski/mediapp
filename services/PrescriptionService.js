import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
  return await prescriptionRepository.findAll();
}

const getById = async (id) => {
  return await prescriptionRepository.findById(id);
}

const createPrescription = async (data) => {
  return await prescriptionRepository.create(data);
}

const updatePrescription = async (id, data) => {
    return await prescriptionRepository.update(id, data);
}

const deletePrescription = async (id) => {
    return await prescriptionRepository.delete(id);
}

const prescriptionService = {
    getAllPrescriptions,
    getById,
    createPrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService;