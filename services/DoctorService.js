import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
  return await doctorRepository.findAll();
}

const getById = async (id) => {
  return await doctorRepository.findById(id);
}

const createDoctor = async (data) => {
  return await doctorRepository.create(data);
}

const updateDoctor = async (id, data) => {
    return await doctorRepository.update(id, data);
}

const deleteDoctor = async (id) => {
    return await doctorRepository.delete(id);
}    

const doctorService = {
  getAllDoctors,
  getById,
  createDoctor,
  updateDoctor,
  deleteDoctor
}

export default doctorService;