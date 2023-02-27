const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use((req, res, next) => {
  res.send("<h1>PAGE NOT FOUNT</h1>");
})

//deneme
app.listen(7070);
