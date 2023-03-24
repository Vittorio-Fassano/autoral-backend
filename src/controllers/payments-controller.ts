/* eslint-disable @typescript-eslint/no-unused-vars */
// import { AuthenticatedRequest } from "@/middlewares";
// import paymentService from "@/services/payments-service";
// import { Response } from "express";
// import httpStatus from "http-status";

// export async function paymentProcess(req: AuthenticatedRequest, res: Response) {
//   try {
//     const { userId } = req;
//     const {
//       ticketId,
//       cardData,
//     } = req.body;

//     if (!ticketId || !cardData) {
//       return res.sendStatus(httpStatus.BAD_REQUEST);
//     }
//     const payment = await paymentService.paymentProcess(ticketId, userId, cardData);

//     if (!payment) {
//       return res.sendStatus(httpStatus.NOT_FOUND);
//     }

//     return res.status(httpStatus.OK).send(payment);
//   } catch (error) {
//     if (error.name === "UnauthorizedError") {
//       return res.sendStatus(httpStatus.UNAUTHORIZED);
//     }
//     return res.sendStatus(httpStatus.NOT_FOUND);
//   }
// }
