const { Pool } = require('pg');

const PG_URI =
  'postgres://zxbnhcgk:st_4SeSbTLcX5mpVSBgjr20bcBwsiLyr@otto.db.elephantsql.com/zxbnhcgk'; // <here is where I have pasted local host

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
