const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://SandraMey:process.env.DB_USER_PASS@test-findee.z1i1t.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
