const userController = {};

userController.newUser = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.results = { user, pass };
  next();
};

userController.deleteUser = (req, res, next) => {
  const { username } = req.body;
  res.locals.results = { username };
  next();
};
module.exports = userController;
