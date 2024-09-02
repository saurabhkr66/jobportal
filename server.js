import express from 'express';
import dotenv from 'dotenv'
import 'express-async-error'
import connectdb from './config/db.js';
import testRoutes from './routes/testRoutes.js'
import cors from 'cors'
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js'
import errorMidleware from './middlewares/errormiddleware.js';
import userRoutes from './routes/userRoutes.js'
import jobRoutes from './routes/jobRoutes.js'


dotenv.config();
connectdb();

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/job",jobRoutes);;

app.use(errorMidleware);

const PORT=process.env.PORT ||8080
app.listen(PORT,()=>{
    console.log(`node running in ${process.env.DEV_MODE} mode on port no ${PORT}`);
})