import { ProductsParams } from "@/repositories/products-repository";
import Joi from "joi";

export const ProductsSchema = Joi.object<ProductsParams>({
  name: Joi.string().min(5).required(),
  price: Joi.number().min(2).required(),
  userId: Joi.number().required(),
});
