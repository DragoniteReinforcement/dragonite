const db = require('../models/appModel.js');

const authController = {};

authController.verifyUser = (req, res, next) => {
  console.log('entered the authController.verifyUser');

  const parameters = [req.body.username, req.body.password];
  const query1 = 'SELECT id FROM users WHERE username = $1 AND password = $2';

  db.query(query1, parameters)
    .then((data) => {
      // console.log(data);
      if (data.rowCount !== 0) res.locals.userId = data.rows[0].id;

      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = authController;
