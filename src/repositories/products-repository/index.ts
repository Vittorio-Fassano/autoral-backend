import { prisma } from "@/config";
import { Products, Sellers, Cart } from "@prisma/client";

export type SellersParams = Omit<Sellers, "id" | "createdAt" | "updatedAt">
export type ProductsParams = Omit<Products, "id" | "createdAt" | "updatedAt">
export type CartParams = Omit<Cart, "id" | "createdAt" | "updatedAt">

async function createSellers(params: SellersParams) {
  return prisma.sellers.create({
    data: {
      ...params,
    }
  });
}

async function findSellerId(userId: number) {
  return prisma.sellers.findFirst({
    where: {
      userId,
    }
  });
}

async function productsCreate(productsData: ProductsParams) {
  console.log("enter in prodCreat", productsData);
  return prisma.products.create({
    data: {
      userId: productsData.userId,
      name: productsData.name,
      price: +productsData.price,
      sellersId: productsData.sellersId,
    }
  });
}

async function cartAdd(cartData: CartParams) {
  console.log("enter in cartAdd");
  return prisma.cart.create({
    data: {
      userId: cartData.userId,
      productsId: cartData.productsId,
    }
  });
}

async function allProducts() {
  console.log("enter in dashboard");
  return prisma.products.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      Sellers: {
        select: {
          User: {
            select: {
              email: true,
            }
          }
        }
      }
    }
  });
}

const productsRepository = {
  productsCreate,
  createSellers,
  findSellerId,
  cartAdd,
  allProducts
};

export default productsRepository;
