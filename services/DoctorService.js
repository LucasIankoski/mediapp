import doctorRepository from "../repositories/DoctorRepository.js";
import bcrypt from "bcrypt";

const getAllDoctors = async () => {
  return await doctorRepository.findAll();
}

const getById = async (id) => {
  return await doctorRepository.findById(id);
}

const createDoctor = async (data) => {
  data.password = await encryptPassword(data.password);
  return await doctorRepository.create(data);
}

const updateDoctor = async (id, data) => {
  data.password = await encryptPassword(data.password);
  return await doctorRepository.update(id, data);
}

const deleteDoctor = async (id) => {
    return await doctorRepository.delete(id);
}    

const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

const getDoctorByLogin = async (login) => {
  return await doctorRepository.getDoctorByLogin(login);
}

const doctorService = {
  getAllDoctors,
  getById,
  createDoctor,
  getDoctorByLogin,
  updateDoctor,
  deleteDoctor
}

export default doctorService;