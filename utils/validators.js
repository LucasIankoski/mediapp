import mongoose from 'mongoose';

export function isValidObjectId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

export function isValidPhone(phone) {
    const regex = /\(\d{2}\) \d{4,5}-\d{4}/;
    return regex.test(phone);
}