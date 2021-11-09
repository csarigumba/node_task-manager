const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');
require('dotenv').config();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Test');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.error(error);
  }
};
start();
