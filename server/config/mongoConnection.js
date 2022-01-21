const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/bunhead-sweets-db';
const db = mongoose.connection;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((err) => console.log(err));

db.once('open', (_) => {
  console.log('Database is connect to', uri);
});

db.on('error', (err) => {
  console.log(err);
});
