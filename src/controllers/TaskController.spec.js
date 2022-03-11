const supertest = require("supertest");
const app = require("../app");
const assert = require("assert");
describe("Task controller test", () => {
  it("should create a new task", async () => {
    const response = await supertest(app).post("/task").send({
      title: "teste",
      description: "teste",
    });

    assert.equal(response.status, 200);
  });
  it("should get all tasks", async () => {
    const response = await supertest(app).get("/task");

    assert.equal(response.status, 200);
  });
  it("should update a task", async () => {
    const response = await supertest(app).put("/task/1").send({
      title: "teste",
      description: "teste",
    });

    assert.equal(response.status, 200);
  });
});
