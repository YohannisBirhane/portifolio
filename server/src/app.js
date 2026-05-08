const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const contactRoutes = require('./routes/contactRoutes');
const messageRoutes = require('./routes/message.routes');
const profileRoutes = require('./routes/profile.routes');
const educationRoutes = require('./routes/education.routes');
const projectRoutes = require('./routes/project.routes');
const skillRoutes = require('./routes/skill.routes');
const adminRoutes = require('./routes/admin.routes');
const { errorHandler } = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running!');
});

app.use(errorHandler);

module.exports = app;
