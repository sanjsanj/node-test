const expect = require("expect");

const utils = require("./utils.js");

describe("Utils", () => {
  describe("Add", () => {
    it("Should add 2 numbers", () => {
      const actual = utils.add(33, 9);
      expect(actual).toEqual(42);
    });

    it("Should async add 2 numbers", done => {
      utils.asyncAdd(33, 9, sum => {
        expect(sum).toEqual(42);
        done();
      });
    });
  });

  describe("Square", () => {
    it("Should square a number", () => {
      const actual = utils.square(5);
      expect(actual).toEqual(25);
    });

    it("Should async square a number", done => {
      utils.asyncSquare(5, res => {
        expect(res).toEqual(25);
        done();
      });
    });
  });

  describe("setName", () => {
    it("Should set users name", () => {
      const user = {
        age: 41,
        location: "London"
      };
      const fullName = "Jane Doe";
      const actual = utils.setName(user, fullName);
      const expected = {
        ...user,
        firstName: "Jane",
        lastName: "Doe"
      };
      expect(actual).toEqual(expected);
    });
  });
});
