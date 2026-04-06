import { RequestHandler, Request, Response } from "express"
import { Category } from "../models/category.js"

// Create
export const createCategory: RequestHandler = (req: Request, res: Response) => {

    // Missing parameter case
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null
        });
    }

    const category = {...req.body};
    Category.create(category)
        .then((data: Category | null) => {
            res.status(200).json({
                status: "success",
                message: "Category succesfully created",
                payload: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Something went wrong! " + err.message,
                payload: null
            });
        });
}

// Get All
export const getAllCategories: RequestHandler = (req: Request, res: Response) => {
    Category.findAll()
        .then((data: Category[]) => {
            return res.status(200).json({
                status: "success",
                message: "Category successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            console.log("ERROR COMPLETO:", JSON.stringify(err, null, 2));
            console.log("SQL:", err.sql);
            return res.status(500).json({
                status: "error",
                message: err.message,
                sql: err.sql,
                original: err.original?.message,
            });
        });
};

// Get By Id
export const getCategoryById: RequestHandler = (req: Request, res: Response) => {

    Category.findByPk(Number(req.params.id))
        .then((data: Category | null) => {
            if (!data) {
                return res.status(404).json({
                    status: "error",
                    message: "Category not found",
                    payload: null,
                });
            }
            return res.status(200).json({
                status: "success",
                message: "Category successfully retrieved",
                payload: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                status: "error",
                message: "Something happened retrieving the Category. " + err.message,
                payload: null,
            });
        });
};

// Update
export const modifyCategory: RequestHandler = (req: Request, res: Response) => {

    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }

    Category.update({ ...req.body }, { where: { id: req.params.id } })
        .then((isUpdated) => {
            if (isUpdated) {
                return res.status(200).json({
                    status: "success",
                    message: "category successfully updated",
                    payload: { ...req.body },
                });
            } else {
                return res.status(500).json({
                    status: "error",
                    message: "Something happened updating the category.",
                    payload: null,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                status: "error",
                message: "Something happened updating the category. " + err.message,
                payload: null,
            });
        });
};

// Delete
export const deleteCategory: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    try {
        await Category.destroy({ where: { id: id } });
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting category",
            error,
        });
    }
};