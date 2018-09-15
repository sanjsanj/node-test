module.exports = {
  add: (a, b) => a + b,

  asyncAdd: (a, b, cb) => {
    setTimeout(() => {
      cb(a + b);
    }, 1000);
  },

  square: x => x * x,

  asyncSquare: (x, cb) => {
    setTimeout(() => {
      cb(x * x);
    }, 1000);
  },

  setName: (user, fullName) => {
    const names = fullName.split(" ");
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  }
};
