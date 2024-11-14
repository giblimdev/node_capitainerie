import Reservation from '../models/reservation.model.js';

export const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createReservation = async (req, res) => {
    const reservation = req.body;

    const newReservation = new Reservation(reservation);

    try {
        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getReservationById = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findById(id);
        res.status(200).json(reservation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateReservation = async (req, res) => {
    const { id } = req.params;
    const reservation = req.body;

    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(id, reservation, { new: true });
        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteReservation = async (req, res) => {
    const { id } = req.params;

    try {
        await Reservation.findByIdAndRemove(id);
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
