import {Application} from 'express';
import { createVideogame } from './controllers/videogame.controller';
export const router = (app: Application) => {
    app.post("/videogames", createVideogame);
}