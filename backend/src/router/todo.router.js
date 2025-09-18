import express from "express";
import { todosCtrl } from "../controllers/todo.controller.js";

const todoRouter = express.Router();

todoRouter.get("/", todosCtrl.getTodos);
todoRouter.get("/:id", todosCtrl.getTodosById);
todoRouter.post("/", todosCtrl.createTodos);
todoRouter.put("/:id", todosCtrl.updateTodos);
todoRouter.delete("/:id", todosCtrl.deleteTodos);

export { todoRouter };
