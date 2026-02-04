import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/signin', (req,res) => {
    res.send('SignIn Route');
})
router.post('/signup', signup);

router.get('/logout', (req,res) => {
    res.send('Logout Route');
})

export default router;