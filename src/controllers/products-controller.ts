/* eslint-disable boundaries/element-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticatedRequest } from "@/middlewares";
import productsService from "@/services/products-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function productsPost(req: AuthenticatedRequest, res: Response) {
  console.log("entrei4");
  const { userId } = req;
  const { name, price } = req.body;
  try {
    const productsInfos = await productsService.productsInfo(name, price, userId);
    console.log("entrei5");
    return res.status(httpStatus.OK).send(productsInfos);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}
