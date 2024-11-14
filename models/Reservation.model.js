import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
    catwayNumber: { type: Number, required: true },
    clientName: { type: String, required: true },
    boatName: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;