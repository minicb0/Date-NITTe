import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

dotenv.config({ path: './config.env' })
app.use(cors());

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected successfully`);
})
.catch((err) => {
    console.log(`Failed to connect database`);
});

const PORT = process.env.PORT || 5000
//Listening to port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})