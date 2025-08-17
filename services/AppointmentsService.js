import appointmentRepository from "../repositories/AppointmentRepository";

const getAllAppointments = async () => {
  return await appointmentRepository.findAll();
}

const getById = async (id) => {
  return await appointmentRepository.findById(id);
}

const createAppointment = async (data) => {
  return await appointmentRepository.create(data);
}

const updateAppointment = async (id, data) => {
    return await appointmentRepository.update(id, data);
}

const deleteAppointment = async (id) => {
    return await appointmentRepository.delete(id);
}

const appointmentService = {
  getAllAppointments,
  getById,
  createAppointment,
  updateAppointment,
  deleteAppointment
}

export default appointmentService;
