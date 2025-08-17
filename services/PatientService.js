import patientRepository from "../repositories/PatientRepository";

const getAllPatients = async () => {
  return await patientRepository.findAll();
}

const getById = async (id) => {
  return await patientRepository.findById(id);
}

const createPatient = async (data) => {
  return await patientRepository.create(data);
}

const updatePatient = async (id, data) => {
    return await patientRepository.update(id, data);
}

const deletePatient = async (id) => {
    return await patientRepository.delete(id);
}

const patientService = {
    getAllPatients,
    getById,
    createPatient,
    updatePatient,
    deletePatient
}

export default patientService;
