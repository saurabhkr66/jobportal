import express from 'express';
import dotenv from 'dotenv'
import connectdb from './config/db.js';
import testRoutes from './routes/testRoutes.js'
import cors from 'cors'
import morgan from 'morgan';




dotenv.config();
connectdb();

const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/v1/test", testRoutes);


const PORT=process.env.PORT ||8080
app.listen(PORT,()=>{
    console.log(`node running in ${process.env.DEV_MODE} mode on port no ${PORT}`);
})