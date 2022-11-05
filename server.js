const db = require("./app/models/index.js");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("established connection to database");
  })
  .catch(err => {
    console.log("failed to connect to database", err);
    process.exit();
  });

//web app object
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add middleware
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "main page here" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});