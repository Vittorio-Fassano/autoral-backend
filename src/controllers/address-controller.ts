/* eslint-disable boundaries/element-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticatedRequest } from "@/middlewares";
import addressService from "@/services/address-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function addressPost(req: AuthenticatedRequest, res: Response) {
  console.log("entrei4");
  const { userId } = req;
  const { cep, local, city, state } = req.body;
  try {
    const address = await addressService.addressInfo(cep, local, city, state, userId);
    console.log("entrei8");
    return res.status(httpStatus.OK).send(address);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}
