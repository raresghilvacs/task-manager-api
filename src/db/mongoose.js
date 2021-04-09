const mongoose = require('mongoose');
const validator = require('validator');


mongoose.connect(`${process.env.MONGODB_URL}/task-manager-api`, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});
