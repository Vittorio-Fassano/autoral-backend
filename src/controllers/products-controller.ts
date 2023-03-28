/* eslint-disable boundaries/element-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticatedRequest } from "@/middlewares";
import addressService from "@/services/address-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function productsPost(req: AuthenticatedRequest, res: Response) {
  console.log("entrei4");
  const { userId } = req;
  const { state, city, cep, local } = req.body;
  try {
    const addressInfos = await addressService.addressInfo(cep, local, state, city, userId);
    console.log("entrei5");
    return res.status(httpStatus.OK).send(addressInfos);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}