import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import storyRouter from './routers/storyRouter';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/stories', storyRouter);

const handleListening = (res, req) =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
