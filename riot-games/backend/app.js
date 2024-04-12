const express = require('express');

const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/players', playerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
