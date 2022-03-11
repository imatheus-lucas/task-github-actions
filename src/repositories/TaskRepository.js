class TaskRepository {
  tasks = [];

  save(data) {
    this.tasks.push(data);
  }
  delete(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  update(id, data) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index] = data;
  }
  getAll() {
    return this.tasks;
  }
  getById(id) {
    return this.tasks.find((task) => task.id === id);
  }
}
module.exports = new TaskRepository();
