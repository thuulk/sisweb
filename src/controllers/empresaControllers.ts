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

// Get All
export const getAllEmpresas: RequestHandler = (req: Request, res: Response) => {

    Empresa.findAll()
        .then((data: Empresa[]) => {
            return res.status(200).json({
                status: "success",
                message: "Empresas successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status: "error",
                message: "Something happened retrieving all empresas. " + err.message,
                payload: null,
            });
        });
};

// Get By Id
export const getEmpresaById: RequestHandler = (req: Request, res: Response) => {

    Empresa.findByPk(Number(req.params.id))
        .then((data: Empresa | null) => {
            if (!data) {
                return res.status(404).json({
                    status: "error",
                    message: "Empresa not found",
                    payload: null,
                });
            }
            return res.status(200).json({
                status: "success",
                message: "Empresa successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status: "error",
                message: "Something happened retrieving the empresa. " + err.message,
                payload: null,
            });
        });
};

// Update
export const modifyEmpresa: RequestHandler = (req: Request, res: Response) => {

    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }

    Empresa.update({ ...req.body }, { where: { id_empresa: req.params.id } })
        .then((isUpdated) => {
            if (isUpdated) {
                return res.status(200).json({
                    status: "success",
                    message: "Empresa successfully updated",
                    payload: { ...req.body },
                });
            } else {
                return res.status(500).json({
                    status: "error",
                    message: "Something happened updating the empresa.",
                    payload: null,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the empresa. " + err.message,
                payload: null,
            });
        });
};

// Delete
export const deleteEmpresa: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    try {
        await Empresa.destroy({ where: { id_empresa: id } });
        res.status(200).json({ message: "Empresa deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting empresa",
            error,
        });
    }
};



