var app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

module.exports = app;
