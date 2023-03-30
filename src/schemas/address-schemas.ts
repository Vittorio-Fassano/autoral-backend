import { AddressParams } from "@/repositories/address-repository";
import Joi from "joi";

export const AddressSchema = Joi.object<AddressParams>({
  state: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
  cep: Joi.number().max(11).required(),
  local: Joi.string().email().required(),
  userId: Joi.number().required(),
});
