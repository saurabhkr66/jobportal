import express from 'express';
import { registerController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import rateLimit from 'express-rate-limit';


const limiter=rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:'Too many request from this IP, please try again after 15 minutes',
    standardHeaders:true,
    legacyHeaders:true
})
const router=express.Router();


router.post('/register',limiter,registerController)
router.post('/login',limiter,loginController)

export default router;