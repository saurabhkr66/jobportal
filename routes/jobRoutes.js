import express from 'express';
import userAuth from '../middlewares/authmiddleware.js';
import { createJobController ,deletejobController,getAllJobsController,updateJobController} from '../controllers/jobsController.js';
const router=express.Router();

router.post('/create-job',userAuth,createJobController)
router.get('/get-job',userAuth,getAllJobsController);
router.patch("/update-job/:id",userAuth,updateJobController);
router.delete("/delete-job/:id",userAuth,deletejobController);
export default router;