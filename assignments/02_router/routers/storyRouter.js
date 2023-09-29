import express from 'express';
import { see, edit, remove } from '../controllers/storyController';

const storyRouter = express.Router();

storyRouter.get('/:id(\\d+)', see);
storyRouter.get('/:id(\\d+)/edit', edit);
storyRouter.get('/:id(\\d+)/remove', remove);

export default storyRouter;
