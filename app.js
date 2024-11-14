import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'; 
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/users.routes.js';
import catwayRoutes from './routes/catways.routes.js';
import reservationRoutes from './routes/reservations.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/catways', catwayRoutes);
app.use('/reservations', reservationRoutes);

connectDB(); 

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
app.use(express.static('public'));

export default app;
