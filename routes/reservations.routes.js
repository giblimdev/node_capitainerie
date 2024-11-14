import express from 'express';
import { getReservations, createReservation, getReservationById, updateReservation, deleteReservation } from '../controllers/reservation.controller.js';

const router = express.Router();

router.get('/', getReservations);
router.post('/', createReservation);
router.get('/:id', getReservationById);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;
