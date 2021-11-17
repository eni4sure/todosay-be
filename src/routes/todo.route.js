const router = require("express").Router();
const TodoCtrl = require("./../controllers/todo.controller");

router.post("/", TodoCtrl.create);
router.get("/", TodoCtrl.getAll);
router.get("/user/:userId", TodoCtrl.getAllByUser);
router.get("/:todoId", TodoCtrl.getOne);
router.put("/:todoId", TodoCtrl.update);
router.delete("/:todoId", TodoCtrl.delete);

module.exports = router;
