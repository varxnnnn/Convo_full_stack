const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");


dotenv.config();
const app= express();
const PORT = 5000

//middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Database Connected"))
  .catch((error) => console.error("❌ Error connecting to Database", error));


//Routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

  

//Start Server
app.listen(PORT,()=> console.log(`🚀 Server running on port ${PORT}`))