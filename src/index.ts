import { config } from "dotenv";
import { connectDB, envConfig } from "./lib/config";
import app from "./app";
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
