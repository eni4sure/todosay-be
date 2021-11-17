const response = require("./../utils/response");
const TodoServ = require("./../services/todo.service");

class TodoContoller {

  async create(req, res) {
    const result = await TodoServ.create(req.body, req.$user);
    res.status(201).send(response("todo created", result));
  }

  async getAll(req, res) {
    const result = await TodoServ.getAll();
    res.status(200).send(response("All todo", result));
  }

  async getOne(req, res) {
    const result = await TodoServ.getOne(req.params.todoId);
    res.status(200).send(response("todo data", result));
  }

  async update(req, res) {
    const result = await TodoServ.update(req.params.todoId, req.body);
    res.status(200).send(response("todo updated", result));
  }

  async delete(req, res) {
    const result = await TodoServ.delete(req.params.todoId);
    res.status(200).send(response("todo deleted", result));
  }

}

module.exports = new TodoContoller();
