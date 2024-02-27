import app from "./app";
import { config } from "dotenv";
import { connectDB, envConfig } from "./lib/config";
config(envConfig());

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log("Error in connecting to MongoDB: ", err);
  });

process.on("uncaughtException", err => {
  console.log("Uncaught Exception: ", err);
  process.exit(1);
});
