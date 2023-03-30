import { prisma } from "@/config";
import { Address } from "@prisma/client";

export type AddressParams = Omit<Address, "id" | "createdAt" | "updatedAt">

async function addressCreate(addressData: AddressParams) {
  console.log("entrei6", addressData);
  return prisma.address.create({
    data: {
      cep: +addressData.cep,
      local: addressData.local,
      state: addressData.state,
      city: addressData.city,
      userId: +addressData.userId,
    }
  });
}

const addressRepository = {
  addressCreate,
};

export default addressRepository;
