const router = require("express").Router();
const TodoCtrl = require("./../controllers/todo.controller");

// POST /api/todo/create
router.post("/create", TodoCtrl.create);

// GET /api/todo/all
router.get("/all", TodoCtrl.getAll);

// GET /api/todo/all/userId
router.get("/all/:userId", TodoCtrl.getAllByUserId);

// GET /api/todo/:todoId
router.get("/:todoId" ,TodoCtrl.getOne);

// PUT /api/todo/:todoId
router.put("/:todoId" ,TodoCtrl.update);

// DEL /api/todo/:todoId
router.delete("/:todoId" ,TodoCtrl.delete);

module.exports = router