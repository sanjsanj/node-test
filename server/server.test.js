const request = require("supertest");

const app = require("./server").app;

describe("Server", () => {
  describe("GET /", () => {
    it("Should return hello world response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect("Hello world")
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("Should return array of users", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect([
          {
            name: "Bob",
            age: 25
          },
          {
            name: "Sue",
            age: 41
          }
        ])
        .end(done);
    });
  });
});
