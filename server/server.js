const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 9000
const BUILD_DIR_PATH = path.join(__dirname, '../build');

app.use(express.static(BUILD_DIR_PATH));

app.get('*', function (req, res) {
    res.sendFile(path.join(BUILD_DIR_PATH, 'index.html'));
});

app.listen(PORT, () => console.log('Server is listening'))
  .on('error', (err) => console.log(err))
