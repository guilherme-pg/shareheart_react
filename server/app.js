const express = require("express");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require("mongoose");
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão ao MongoDB estabelecida com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB", err);
  });

const userRoute = require("./routes/user.route");
const donationRoute = require("./routes/donation.route");

app.use(express.json({ limit: '10kb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use("/user", userRoute);
app.use("/donation", donationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});