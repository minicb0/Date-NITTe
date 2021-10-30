import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Importing the routes
import authRoute from "./routes/authRoute";

const app = express();

dotenv.config({ path: "./config.env" });
app.use(cors());
app.use(express.json());

// All the routes
app.use("/api", authRoute);

mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("Database connected successfully");
})
	.catch((err) => {
		console.log(`${err} Failed to connect database`);
	});

const PORT = process.env.PORT || 5000;
// Listening to port
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
