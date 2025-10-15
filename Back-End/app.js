const express = require('express');
const cors = require('cors');
const { notFoundError, errorHandler } = require('./utils/error-handling');
const { AllRouters } = require('./router/index.routes');
const { default: mongoose } = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/auth-simple-project', {}).then(() => {
    console.log('Connected to MongoDB');
})
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AllRouters);
app.use(notFoundError);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});