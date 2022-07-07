"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const videogame_controller_1 = require("./controllers/videogame.controller");
const router = (app) => {
    /**
     * @swagger
     * /videogames:
     *  post:
     *   description: Create a new videogame
     */
    app.post("/videogames", videogame_controller_1.createVideogame);
    app.get("/videogames/:id", videogame_controller_1.retrieveVideogame);
    app.put("/videogames/:id", videogame_controller_1.updateVideogame);
    app.delete("/videogames/:id", videogame_controller_1.deleteVideogame);
    app.get("/videogames", videogame_controller_1.listVideogames);
};
exports.router = router;
