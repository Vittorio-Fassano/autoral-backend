import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { productsPost, cartPost } from "@/controllers/products-controller";

const productsRouter = Router();

productsRouter
  .all("/*", authenticateToken)
  .post("/post", productsPost)
  .post("/cart/:productsId", cartPost);

export { productsRouter };
