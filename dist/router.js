"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const videogame_controller_1 = require("./controllers/videogame.controller");
const router = (app) => {
    app.post("/videogames", videogame_controller_1.createVideogame);
};
exports.router = router;
