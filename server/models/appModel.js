const { Pool } = require('pg');

const PG_URI =
  'postgres://rkxawmbo:kn-5aipngU2ojtd4vShLnU_gCzzyydXw@otto.db.elephantsql.com/rkxawmbo'; // <here is where I have pasted local host

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
