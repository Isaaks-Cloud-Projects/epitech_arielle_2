
require('dotenv').config()
//bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const app = express();

const socketService = require('./socket');

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

//console.log("env = ", process.env);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/events', eventRoutes);

socketService(app);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Root call successful!" });
});

app.get("/test_connection", (req, res) => {
  db.one("SELECT NOW()")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

/*
app.listen(${process.env.SERVER_PORT}, () =>
  console.log(`[bootup]: Server is running at port: ${process.env.SERVER_PORT}`)
);
*/
