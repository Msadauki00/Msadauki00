const express = require('express');
const path = require('path');
const app = express();

// Serve free files
app.use('/files', express.static(path.join(__dirname, 'files')));

// Paid file download route
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'files', req.params.filename);
  res.download(filePath);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
