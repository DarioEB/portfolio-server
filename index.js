const express = require('express');
const connection = require('./config/db.js');
const cors = require('cors');

const app = express();
connection();

// Habilitación de cors
app.use(cors({ credentials: true, origin: true}));
app.options("*", cors());

app.use(express.json({ extended: true}))

const port = process.env.PORT || 4000;

app.use('/api/projects', require('./routes/projects'));
app.use('/api/technologies', require('./routes/technologies'));
app.use('/api/contact', require('./routes/contact'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});