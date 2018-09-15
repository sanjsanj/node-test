const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app.js");

describe("App", () => {
  const db = {
    saveUser: expect.createSpy()
  };
  
  app.__set__("db", db);

  it("Should call the spy correctly", () => {
    const spy = expect.createSpy();
    spy("Jane");
    expect(spy).toHaveBeenCalledWith("Janes");
  })

  it("Should call saveUser() with user object", () => {
    const email = "bob@email.com";
    const password = "1234";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  })
})

