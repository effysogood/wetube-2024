import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === '/protected') {
    return res.send(`<h1>Not Allowed.</h1>`);
  }
  console.log(`Allowed. You may continue.`);
  next();
};

const home = (req, res) => {
  return res.send('Home!');
};

const login = (req, res) => {
  return res.send('Login');
};

const handleProtected = (req, res) => {
  return res.send(`Welcome to the Private Lounge`);
};

app.use(logger);
app.get('/', home);
app.get('/login', login);
app.get('/protected', handleProtected);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
