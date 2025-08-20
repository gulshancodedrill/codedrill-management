import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // change if using another user
  password: 'infotech',       // your MySQL password
  database: 'blogs_db'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// Get all blogs
app.get('/api/blogs', (req, res) => {
  db.query('SELECT * FROM blogs ORDER BY date DESC', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add a new blog
app.post('/api/blogs', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  db.query(
    'INSERT INTO blogs (title, content) VALUES (?, ?)',
    [title, content],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        id: result.insertId,
        title,
        content,
        date: new Date()
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
