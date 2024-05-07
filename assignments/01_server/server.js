import express from 'express';

const PORT = 4000;

const app = express();

const Home = (req, res) => {
  return res.send('<h1>Home</h1>');
};
const About = (req, res) => {
  return res.send('<h1>About</h1>');
};
const Contact = (req, res) => {
  return res.send('<h1>Contact</h1>');
};
const Login = (req, res) => {
  return res.send('<h1>Login</h1>');
};

app.get('/', Home);
app.get('/about', About);
app.get('/contact', Contact);
app.get('/login', Login);

app.listen(PORT, () =>
  console.log(`✅ Server is listening on port http://localhost:${PORT} 🚀`)
);
