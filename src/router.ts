import {Application} from 'express';
import { createVideogame, retrieveVideogame, updateVideogame, deleteVideogame, listVideogames} from './controllers/videogame.controller';

export const router = (app: Application) => {
    app.post("/videogames", createVideogame);
    app.get("/videogames/:id", retrieveVideogame);
    app.put("/videogames/:id", updateVideogame);
    app.delete("/videogames/:id", deleteVideogame);
    app.get("/videogames", listVideogames);

}