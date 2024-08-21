import express from 'express';
import { testPostControllers } from '../controllers/testController.js';

const router=express.Router();

router.post('/test',testPostControllers)


export default router;