import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { addressPost } from "@/controllers/address-controller";

const addressRouter = Router();

addressRouter
  .all("/*", authenticateToken)
  .post("/", addressPost);

export { addressRouter };
