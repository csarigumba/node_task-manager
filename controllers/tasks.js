const Task = require('../models/Task');

const getAllItems = (req, res) => {
  res.send('Get all items');
};

const createTask = async (req, res) => {
  try {
    const createdTask = await Task.create(req.body);
    res.status(201).json({ createdTask });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTask = (req, res) => {
  res.send('get task');
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = {
  getAllItems,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
