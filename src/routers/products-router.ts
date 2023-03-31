import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { productsPost, cartPost, dashboard } from "@/controllers/products-controller";

const productsRouter = Router();

productsRouter
  // .all("/*", authenticateToken)
  .post("/post", authenticateToken, productsPost)
  .post("/cart/:productsId", authenticateToken, cartPost)
  .get("/dashboard", dashboard);

export { productsRouter };
