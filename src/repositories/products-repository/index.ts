import { prisma } from "@/config";
import { Products } from "@prisma/client";

export type ProductsParams = Omit<Products, "id" | "createdAt" | "updatedAt" >

async function productsCreate(params: ProductsParams) {
  return prisma.products.create({
    data: {
      ...params,
    }
  });
  // const product = await prisma.products.create({
  //   data: {
  //     name: productsData.name,
  //     price: productsData.price,
  //     userId: productsData.userId,
  //   }
  // });
  // console.log(product);
  // return response.send(product);
}

const productsRepository = {
  productsCreate,
};

export default productsRepository;
