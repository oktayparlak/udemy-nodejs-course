const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/admin', adminRoutes);
app.use( shopRoutes);

app.use('*', errorController.get404);

const port = 7070;
app.listen(port, () => {
  console.log(`App started on port http://localhost:${port}`);
});
