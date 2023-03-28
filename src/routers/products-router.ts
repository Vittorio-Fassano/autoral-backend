import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { productsPost } from "@/controllers/products-controller";

const productsRouter = Router();

productsRouter
  .all("/*", authenticateToken)
  .post("/", productsPost);

export { productsRouter };
