const Todo = require("./../models/todo.model");
const CustomError = require("./../utils/custom-error");

class TodoService {

  async create(data) {
    if (!data.text) throw new CustomError("Text is required");
    if (!data.time) throw new CustomError("Time is required");
    if (!data.status) throw new CustomError("Status is required");
    if (!data.category) throw new CustomError("Category is required");

    return await new Todo(data).save();
  }

  async getAll() {
    return await Todo.find({});
  }

  async getOne(todoId) {
    const todo = await Todo.findOne({ _id: todoId });
    if (!todo) throw new CustomError("Todo does not exists");

    return todo
  }

  async update(todoId, data) {
    const todo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      { $set: data },
      { new: true }
    );

    if (!todo) throw new CustomError("Todo dosen't exist", 404);

    return todo;
  }

  async delete(todoId) {
    const todo = await Todo.findOne({ _id: todoId });
    todo.remove()
    return todo
  }

}

module.exports = new TodoService();