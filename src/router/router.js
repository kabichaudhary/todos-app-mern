import express from "express";
import { todoRouter } from "./todo.router.js";

const router = express.Router();

router.use("/todos", todoRouter);

export { router };
