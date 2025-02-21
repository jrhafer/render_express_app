const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000);
i;
