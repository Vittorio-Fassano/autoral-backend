/* eslint-disable @typescript-eslint/no-unused-vars */
import addressRepository from "@/repositories/address-repository";
import { Console } from "console";

async function addressInfo(cep: number, local: string, city: string, state: string, userId: number) {
  console.log(cep, local, city, state, userId);
  const addressData = {
    cep,
    local,
    state,
    city,
    userId
  };
  console.log("entrei5", addressData);

  const address = await addressRepository.addressCreate(addressData);
  console.log("entrei7");
  return address;
}

const addressService = {
  addressInfo,
};

export default addressService;
