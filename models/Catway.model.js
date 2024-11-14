import mongoose from 'mongoose';

const catwaySchema = mongoose.Schema({
    catwayNumber: { type: Number, required: true, unique: true },
    type: { type: String, required: true, enum: ['long', 'short'] },
    catwayState: { type: String, required: true }
});

const Catway = mongoose.model('Catway', catwaySchema);

export default Catway;
