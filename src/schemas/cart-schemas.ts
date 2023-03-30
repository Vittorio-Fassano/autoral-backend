import { CartParams } from "@/repositories/products-repository";
import Joi from "joi";

export const CartSchema = Joi.object<CartParams>({
  productsId: Joi.number().required(),
  userId: Joi.number().required(),
});
