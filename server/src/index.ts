//Username: areebsafirkhan10
//PWD: dzdgABbc6CUVqfs4
import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records';
import cors from "cors";

const app: Express = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const mongoURI: string = "mongodb+srv://areebsafirkhan10:dzdgABbc6CUVqfs4@personalfinancetracker.polbqir.mongodb.net/"

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to Mongodb:", err))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
}) 
