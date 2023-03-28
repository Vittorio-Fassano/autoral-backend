import { prisma } from "@/config";
import { Payment } from "@prisma/client";

// async function createPayment(ticketId: number, params: PaymentParams) {
//   return prisma.payment.create({
//     data: {
//       ticketId,
//       ...params,
//     }
//   });
// }

export type PaymentParams = Omit<Payment, "id" | "createdAt" | "updatedAt">

const paymentRepository = {
  // createPayment,
};

export default paymentRepository;
