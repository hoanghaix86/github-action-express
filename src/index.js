import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:3000`);
});