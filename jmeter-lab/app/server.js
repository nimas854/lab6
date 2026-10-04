const express = require('express');
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: 'Tashi Dorji', course: 'Software Engineering' },
  { id: 2, name: 'Pema Wangmo', course: 'Information Technology' },
  { id: 3, name: 'Karma Choden', course: 'Software Engineering' }
];
let nextId = 4;

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
});

app.post('/students', (req, res) => {
  const student = { id: nextId++, name: req.body.name, course: req.body.course };
  students.push(student);
  res.status(201).json(student);
});

app.listen(3000, () => console.log('Server running on port 3000'));