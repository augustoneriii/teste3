const express = require('express');
const cors = require('cors');

const app = express();

// Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: '*' }));

// Public folder for images
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'teste ok' });
});

app.listen(5000);
