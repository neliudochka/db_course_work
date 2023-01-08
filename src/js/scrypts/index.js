const db = require('./config');
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.json());

app.use('/', require('./router'));


db.connect(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));










