import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // change if using another user
  password: 'infotech',  // your MySQL password
  database: 'blogs_db'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});


// ===================== BLOG APIs =====================

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

// ===================== USER REGISTRATION APIs =====================
//Add users
app.post('/api/users', (req, res) => {
  const { first_name, last_name, email, password, confirm_password, skills, address1, address2, city, postcode, country, state, phone_number, experience, last_company, current_company, position} = req.body;

  try {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10); // 10 salt rounds

    // insert into users
    db.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error inserting user' });
        }

        const userId = result.insertId;

        // insert into user_profiles
        db.query(
          `INSERT INTO user_profiles 
           (user_id, skills, address1, address2, city, postcode, country, state, phone_number, experience, last_company, current_company, position_in_company) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            userId,
            skills,
            address1,
            address2,
            city,
            postcode,
            country,
            state,
            phone_number,
            experience,
            last_company,
            current_company,
            position
          ],
          (err, profileResult) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Error inserting user profile' });
            }

            // ✅ Success response (only once!)
            return res.status(201).json({
              success: true,
              userId,
              first_name,
              last_name,
              email,
              skills,
              address1,
              address2,
              city,
              postcode,
              country,
              state,
              phone_number,
              experience,
              last_company,
              current_company,
              position
            });
          }
        );
      }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Login API 
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];

    // Compare the password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    // Create JWT token
    const SECRET_KEY = 'codedrill@123';
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({
      token,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
    });
  });
});

// ===================== START SERVER =====================
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
