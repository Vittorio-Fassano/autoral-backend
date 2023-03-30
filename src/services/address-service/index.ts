/* eslint-disable @typescript-eslint/no-unused-vars */
import addressRepository from "@/repositories/address-repository";

async function addressInfo( state: string, city: string, cep: number, local: string, userId: number) {
  const addressData = {
    cep,
    local,
    state,
    city,
    userId
  };
  console.log("entrei5");

  const address = await addressRepository.addressCreate(addressData);
  console.log("entrei7");
  return address;
}

const addressService = {
  addressInfo,
};

export default addressService;
