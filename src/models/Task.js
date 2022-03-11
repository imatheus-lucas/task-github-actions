const crypto = require("crypto");
class Task {
  constructor(id, title, description, created_at) {
    if (!id) {
      this.id = crypto.randomUUID();
    }
    this.title = title;
    this.description = description;
    this.created_at = Date.now();
  }
}

module.exports = Task;
