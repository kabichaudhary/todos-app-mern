import express from "express";
import { todosCtrl } from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.get("/", todosCtrl.getTodos);
todoRouter.get("/:userId", todosCtrl.getTodos);
todoRouter.post("/create", todosCtrl.createTodos);
todoRouter.put("/update/:userId", todosCtrl.todosUpdate);
todoRouter.delete("/delete", todosCtrl.todosDelete);
todoRouter.delete("/delete/:userId", todosCtrl.todosDelete);

export { todoRouter };
