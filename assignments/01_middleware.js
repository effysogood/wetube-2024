import express from 'express';

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path : ${req.path}`);
  next();
};

const timeLogger = (req, res, next) => {
  const now = new Date();
  console.log(
    `Time : ${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
  );
  next();
};

const secureLogger = (req, res, next) => {
  if (req.protocol === 'https') {
    console.log('✅ Secure');
  } else {
    console.log('❌ Insecure');
  }
  next();
};

const protectorLogger = (req, res, next) => {
  if (req.path === '/protected') {
    console.log(`Not Allowed.`);
    return res.send(`<h1>Not Allowed.</h1>`);
  }
  next();
};

const home = (req, res) => {
  return res.send(`It's HOME🏡`);
};
const protectedURL = (req, res) => {
  return res.send(`Forbidden`);
};

app.use(urlLogger, timeLogger, secureLogger, protectorLogger);
app.get('/', home);
app.get('/protected', protectedURL);

const handleListening = (req, res) => {
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
