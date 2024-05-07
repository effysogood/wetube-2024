import express from 'express';
import { profile, see, edit } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', profile);
userRouter.get('/:id', see);
userRouter.get('/:id/edit', edit);

export default userRouter;
