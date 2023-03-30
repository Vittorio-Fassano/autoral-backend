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
    await productsService.createSeller(userId);
    const seller = await productsService.findSellerId(userId);

    const products = await productsService.productsInfo(name, price, userId, seller.id);
    console.log("entrei5");

    return res.status(httpStatus.OK).send(products);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}

export async function cartPost(req: AuthenticatedRequest, res: Response) {
  console.log("entrei4");
  const { userId } = req;
  const { productsId } = req.params;
  console.log(productsId);
  const productsIdNumber = parseInt(productsId);
  console.log("1", userId, productsIdNumber);
  try {
    const cart = await productsService.cartInfos(userId, productsIdNumber);
    console.log("entrei5");

    return res.status(httpStatus.OK).send(cart);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}
