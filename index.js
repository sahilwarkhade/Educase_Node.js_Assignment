const express = require('express');
const bodyParser = require('body-parser');
const addSchoolRoutes = require('./routes/school');
require('dotenv').config();

const app = express();
const PORT = 4000 || process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use("/api/v1",addSchoolRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
