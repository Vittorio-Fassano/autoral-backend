/* eslint-disable @typescript-eslint/no-unused-vars */
import { notFoundError, unauthorizedError } from "@/errors";
// import paymentRepository, { PaymentParams } from "@/repositories/payment-repository";

// async function paymentProcess(ticketId: number, userId: number, cardData: CardPaymentParams) {
//   const paymentData = {
//     productsId,
//     value: price,
//     cardIssuer: cardData.issuer,
//     cardLastDigits: cardData.number.toString().slice(-4),
//   };

//   const payment = await paymentRepository.createPayment(ticketId, paymentData);

//   await ticketRepository.ticketProcessPayment(ticketId);

//   return payment;
// }

// export type CardPaymentParams = {
//   issuer: string,
//   number: number,
//   name: string,
//   expirationDate: Date,
//   cvv: number
// }

// const paymentService = {
//   getPaymentByTicketId,
//   paymentProcess,
// };

// export default paymentService;
