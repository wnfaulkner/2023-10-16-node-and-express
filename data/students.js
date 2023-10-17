// data/todo-db.js

const students = [
  { student: 'Yakov', grade: 91 },
  { student: 'Svetlana', grade: 85 },
  { student: 'Yuri', grade: 78 },
  { student: 'Tatiana', grade: 89 },
  { student: 'Ivan', grade: 76 },
  { student: 'Natalia', grade: 92 },
  { student: 'Vladimir', grade: 83 },
  { student: 'Olga', grade: 88 },
  { student: 'Dmitri', grade: 79 },
  { student: 'Anastasia', grade: 90 },
  { student: 'Pavel', grade: 87 },
  { student: 'Marina', grade: 80 },
  { student: 'Nikolai', grade: 94 },
  { student: 'Ekaterina', grade: 72 },
  { student: 'Andrei', grade: 81 },
  { student: 'Sofia', grade: 93 },
  { student: 'Anton', grade: 77 },
  { student: 'Larisa', grade: 84 },
  { student: 'Mikhail', grade: 86 },
  { student: 'Lyudmila', grade: 75 }
];

module.exports = {
    getAll: function() {
      return students;
    }
  };

