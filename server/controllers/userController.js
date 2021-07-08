const db = require('../models/appModel.js');

const userController = {};

userController.newUser = (req, res, next) => {
  const { username, password } = req.body;
  const newUserValues =[username, password ];
  const newUserQuery = 'INSERT INTO users ( username, password) VALUES( $1, $2)';
  db.query(newUserQuery, newUserValues)
  .then((data) =>{
    res.locals.results = data;
    next();
  }).catch(err => { console.log(err);
    next(err);
  });
};

userController.deleteUser = (req, res, next) => {
  const { username } = req.body;
  const deleteUserValues =[username];
  const deleteUserQuery = 'DELETE from users WHERE username = $1'
  db.query(deleteUserQuery, deleteUserValues)
  .then((data) =>{
    res.locals.results = data;
    next();
  }).catch(err => { console.log(err);
    next(err);
  });
};



userController.getUserId = (req, res, next) => {
  console.log('getUserId',req.body)
  const {username} = req.body
  const usernameValues = [username]
  const userIdQuery = 'SELECT id FROM users Where username = $1'
    db.query(userIdQuery, usernameValues)
    .then((data) =>{
      res.locals.results = data;
      next();
    }).catch(err => { console.log(err);
      next(err);
    });
};

userController.getEventId = (req, res, next) => {
  console.log('getEventId',req.body)
  const {userId} = res.locals.results
  const userIdValues = [userId]
  const eventIdQuery = 'SELECT event_id FROM users_events Where user_id = $1' 

  db.query(eventIdQuery, userIdValues)
    .then((data) =>{
      res.locals.results = data;
      next();
    }).catch(err => { console.log(err);
      next(err);
    });
}

userController.getEventInfo = (req, res, next) => {
  console.log('getEventInfo',req.body)
  const {event_id} = res.locals.results
  const eventIdValues = [event_id]
  const eventInfoQuery = 'SELECT id, name, rules, prize, start_date, end_date from events where id = $1'

  db.query(eventInfoQuery, eventIdValues)
    .then((data) =>{
      res.locals.results = data;
      next();
    }).catch(err => { console.log(err);
      next(err);
    });
}

userController.joinEvent = (req, res, next) => {
  
  const {id} = res.locals.results.rows[0]
  console.log(id)
  const {event_id} = req.body
  const values = [id, event_id]
  const query = 'INSERT INTO users_events ( user_id, event_id) VALUES($1, $2);'

  db.query(query, values)
    .then((data) =>{
      res.locals.results = data;
      next();
    }).catch(err => { console.log(err);
      next(err);
    });
}


module.exports = userController;
