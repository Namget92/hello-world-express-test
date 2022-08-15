const express = require("express");
const PORT = process.env.PORT || 4000;
const aws = require("aws-sdk");
require("dotenv").config();

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
});

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${process.env.DUMMY_TEXT}`);
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
