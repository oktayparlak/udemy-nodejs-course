const path = require('path');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/**Middlewares */
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/**Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(7070);
