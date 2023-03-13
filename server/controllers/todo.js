const Todo = require("../models/todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.findOne({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewTodo = async (req, res) => {
  try {
    const newTodoData = req.body;
    const todos = await Todo.create(newTodoData);
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.findOneAndDelete({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newTodoData = req.body;

    const todos = await Todo.findByIdAndUpdate(_id, { ...newTodoData, _id }, { new: true });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  deleteTodo,
  updateTodo,
};