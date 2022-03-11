const Task = require("../models/Task");
const TaskRepository = require("../repositories/TaskRepository");

class TaskController {
  save(req, res) {
    const task = new Task(req.body);
    TaskRepository.save(task);

    return res.json(task);
  }
  delete(req, res) {
    const task = TaskRepository.delete(req.params.id);
    return res.json(task);
  }
  update(req, res) {
    const task = TaskRepository.update(req.params.id, req.body);
    return res.json(task);
  }
  getAll(req, res) {
    const task = TaskRepository.getAll();
    return res.json(task);
  }
  getById(req, res) {
    const task = TaskRepository.getById(req.params.id);
    return res.json(task);
  }
}

module.exports = new TaskController();
