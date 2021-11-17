const Todo = require("./../models/todo.model");
const CustomError = require("./../utils/custom-error");

class TodoService {
  async create(data, user) {
    if (!data.text) throw new CustomError("Text is required");
    if (!data.time) throw new CustomError("Time is required");
    if (!data.status) throw new CustomError("Status is required");
    if (!data.category) throw new CustomError("Category is required");

    data.userId = user._id;
    return await new Todo(data).save();
  }

  async getAll() {
    return await Todo.find({}).populate("userId", "_id username email");
  }

  async getOne(todoId) {
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo) throw new CustomError("Todo does not exists");

    return todo.populate("userId", "_id username email");
  }

  async update(todoId, data) {
    const todo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      { $set: data },
      { new: true }
    );

    if (!todo) throw new CustomError("Todo dosen't exist", 404);

    return todo.populate("userId", "_id username email");
  }

  async delete(todoId) {
    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) throw new CustomError("Todo dosen't exist", 404);

    todo.remove();
    return todo.populate("userId", "_id username email");
  }
}

module.exports = new TodoService();
