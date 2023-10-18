import Router from "express";
import UsersController from "../controllers/UsersController.js";

const usersRoutes = Router();

const userController = new UsersController();

usersRoutes.post("/", userController.create)
usersRoutes.put("/:id", userController.update)


export default usersRoutes;