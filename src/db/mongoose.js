const mongoose = require('mongoose');

const db_url = "mongodb://localhost:27017/"+ process.env.DATABASE_NAME;

mongoose.connect(db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);