import { RequestHandler, Request, Response } from "express"
import { Empresa } from "../models/empresa.js"

// Create
export const createEmpresa: RequestHandler = (req: Request, res: Response) => {

    // Missing parameter case
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null
        });
    }

    const empresa = {...req.body};
    Empresa.create(empresa)
        .then((data: Empresa | null) => {
            res.status(200).json({
                status: "success",
                message: "Empresa succesfully created",
                payload: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Something went wrong!",
                payload: null
            });
        });
}



