exports.up = function(knex, Promise) {
  // makes the changes to the database
  return knex.schema.createTable('students', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments(); // generate and id field and make it autoincfement and the primary key

    // other fields
    tbl.string('name', 255);
    tbl.string('email', 128);

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists('students');
};
