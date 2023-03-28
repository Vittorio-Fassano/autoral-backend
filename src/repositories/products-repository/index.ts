import { prisma } from "@/config";
import { Address } from "@prisma/client";

export type AddressParams = Omit<Address, "id" | "createdAt" | "updatedAt">

async function productsCreate(addressData: AddressParams) {
  const teste = await prisma.address.create({
    data: {
      cep: addressData.cep,
      local: addressData.local,
      state: addressData.state,
      city: addressData.city,
      userId: addressData.userId,
    }
  });
  console.log(teste);
  return teste;
}

const addressRepository = {
  productsCreate,
};

export default addressRepository;
