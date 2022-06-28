import { Request, Response } from "express";
import { IResponse } from "../models/responce.model";
import { IVideogame, Videogame } from "../models/videogame.model";

export const createVideogame = async(req: Request, res: Response)=> {
    const { title,description,category,effectiveDate,price }: IVideogame = req.body;
    const response = await new VideogameController().create({title,description,category,effectiveDate,price });
    return res.status(response.status).json(response);
}

class VideogameController {
    public async create(payload: IVideogame) : Promise<IResponse>{
        const videogame = new Videogame(payload);
        return videogame.save().then(data => {
            return{
                message: "CREATED: Player added to database",
                status: 201,
                content: data
            }
        }).catch(err => {
            return {
                message: "Error on create Videogame",
                status: 500,
                content: err
            }
        });
    }
}