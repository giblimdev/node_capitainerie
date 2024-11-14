import express from 'express';
import { getCatways, createCatway, getCatwayById, updateCatway, deleteCatway } from '../controllers/catway.controller.js';

const router = express.Router();

router.get('/', getCatways);
router.post('/', createCatway);
router.get('/:id', getCatwayById);
router.put('/:id', updateCatway);
router.delete('/:id', deleteCatway);

export default router;
