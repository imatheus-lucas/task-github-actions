const { Router } = require("express");
const TaskController = require("./controllers/TaskController");

const router = Router();

router.get("/task", TaskController.getAll);
router.get("/task/:id", TaskController.getById);
router.post("/task", TaskController.save);
router.put("/task/:id", TaskController.update);
router.delete("/task/:id", TaskController.delete);

module.exports = router;
