import express, {Express, Request, Response} from "express";
import router  from "./routes/workouts";
import * as dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});



mongoose.connect(process.env.MONGO_URI as string).then(()=>console.log("Connected to DB")).catch((e)=>{console.log(e)});

// Routes

app.use(router);


app.listen(3000, ()=>{
    console.log("Listening on Port 3000");
})