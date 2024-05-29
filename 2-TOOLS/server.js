const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('build'));

const listener = app.listen(8080, function () {
  console.log(`Listening on port ${listener.address().port}`);
});
