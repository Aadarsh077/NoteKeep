const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express();
const PORT = process.env.PORT || 5000;

var cors = require('cors');
app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/authen'));
app.use('/api/notes', require('./routes/notes'));

app.listen(PORT, () => {
  console.log(`KeepNote backend listening at http://localhost:${PORT}`);
});
