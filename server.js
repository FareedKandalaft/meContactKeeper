const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

// Connect to DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => {
//   res.json({ msg: 'Welcome to the ContactKepper API' });
// });

// DEFINE ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
// **IMPORTANT** this if statement is below the DEFINE ROUTES section
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
