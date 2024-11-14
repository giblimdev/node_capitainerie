import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Recherchez l'utilisateur par e-mail
        const user = await User.findOne({ email });
        if (!user) {
            return res.render('register', { email });
        }

        // Comparez le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('index', { error: 'Mot de passe incorrect' });
        }

        // Créez et signez un token JWT
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Répondez avec le token
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Vérifiez si l'utilisateur existe déjà
        let user = await User.findOne({ email });
        if (user) {
            return res.render('index', { error: 'Utilisateur déjà existant' });
        }

        // Créez un nouvel utilisateur
        user = new User({ name, email, password });

        // Hachez le mot de passe
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Sauvegardez l'utilisateur
        await user.save();

        // Redirigez vers la page de connexion
        res.render('index', { success: 'Inscription réussie, vous pouvez maintenant vous connecter' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
