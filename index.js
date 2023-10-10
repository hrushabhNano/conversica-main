const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


// serving client files from node server
if (process.env.NODE_ENV.toLowerCase() === "production" || process.env.NODE_ENV.toLowerCase() === "prod" || process.env.NODE_ENV.toLowerCase() === "uat") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5001, (req, res) => {
  console.log(`Server listening on ${process.env.PORT}`);
});
