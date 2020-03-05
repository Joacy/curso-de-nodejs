const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://joacyms:bancomongojoacy13@cluster0-355hd.mongodb.net/nodeapi?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./src/models/Product');

app.use('/api', require('./src/routes'));

app.listen(3001);