"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideogame = void 0;
const videogame_model_1 = require("../models/videogame.model");
const createVideogame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, category, effectiveDate, price } = req.body;
    const response = yield new VideogameController().create({ title, description, category, effectiveDate, price });
    return res.status(response.status).json(response);
});
exports.createVideogame = createVideogame;
class VideogameController {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const videogame = new videogame_model_1.Videogame(payload);
            return videogame.save().then(data => {
                return {
                    message: "CREATED: Player added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on create Videogame",
                    status: 500,
                    content: err
                };
            });
        });
    }
}
