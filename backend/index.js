import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

//api's
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

// -----------Code for Deployment------------------
if (process.env.NODE_ENV === "production") {
  const dirpath = path.resolve();

  app.use(express.static(path.join(dirpath, "client/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(dirpath, "client/dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
