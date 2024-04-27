const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/universitySystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// MongoDB Models
const Course = mongoose.model('Course', { name: String, faculty: String });
const Faculty = mongoose.model('Faculty', { name: String });

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'StudentGrades'
});
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// MongoDB Routes
app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.post('/courses', async (req, res) => {
    const { name, faculty } = req.body;
    const course = new Course({ name, faculty });
    await course.save();
    res.json(course);
});

app.get('/faculty', async (req, res) => {
    const faculty = await Faculty.find();
    res.json(faculty);
});

app.post('/faculty', async (req, res) => {
    const { name } = req.body;
    const faculty = new Faculty({ name });
    await faculty.save();
    res.json(faculty);
});

// MySQL Routes
app.get('/grades/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    db.query('SELECT * FROM grades WHERE student_id = ?', [studentId], (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Error querying grades');
            return;
        }
        res.json(results);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
