exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Caleb', cohort_id: 1 },
        { name: 'John', cohort_id: 3 },
        { name: 'Debby', cohort_id: 3 },
        { name: 'Bob', cohort_id: 1 },
      ]);
    });
};
