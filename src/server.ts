import app from './app';
import connectToMongoDB from './database/mongoose';
import {Request, Response} from "express";
import { PORT } from './config';

// Start MongoDB Connection
// connectToMongoDB();

app.get('/hello', (req:Request, res: Response)=>{
    res.send({message: "Hellooooo World!!!!!!"})
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});