import Catway from '../models/catway.model.js';

export const getCatways = async (req, res) => {
    try {
        const catways = await Catway.find();
        res.status(200).json(catways);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCatway = async (req, res) => {
    const catway = req.body;

    const newCatway = new Catway(catway);

    try {
        await newCatway.save();
        res.status(201).json(newCatway);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getCatwayById = async (req, res) => {
    const { id } = req.params;

    try {
        const catway = await Catway.findById(id);
        res.status(200).json(catway);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateCatway = async (req, res) => {
    const { id } = req.params;
    const catway = req.body;

    try {
        const updatedCatway = await Catway.findByIdAndUpdate(id, catway, { new: true });
        res.status(200).json(updatedCatway);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteCatway = async (req, res) => {
    const { id } = req.params;

    try {
        await Catway.findByIdAndRemove(id);
        res.status(200).json({ message: 'Catway deleted successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
