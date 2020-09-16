const { Pool } = require('pg');

// Scratch Project DB
// const PG_URI = 'postgres://kiipxwlq:fdhZ04bcsLWpV1MWWWbGCP0rJ3D7z57w@lallah.db.elephantsql.com:5432/kiipxwlq';

// Iteration Project DB
const PG_URI = '	postgres://adtnqhbu:qoDLqGqAIc0dTy7pJq79QzRAe0T6yjf5@lallah.db.elephantsql.com:5432/adtnqhbu'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};