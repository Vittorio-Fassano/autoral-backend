/* eslint-disable @typescript-eslint/no-unused-vars */
import productsRepository from "@/repositories/products-repository";

async function createSeller(userId: number) {
  const sellerData = {
    userId
  };
  console.log("sellerData", sellerData);

  const newSeller = await productsRepository.createSellers(sellerData);
  console.log("newSeller", newSeller);
  return newSeller;
}

async function findSellerId(userId: number) {
  const sellerId = await productsRepository.findSellerId(userId);
  console.log("sellerId", sellerId);
  return sellerId;
}

async function productsInfo(name: string, price: number, userId: number, sellersId: number) {
  console.log(name, price, userId, sellersId);
  const productsData = {
    name,
    price,
    userId,
    sellersId,
  };
  console.log("entrei6", productsData);

  const products = await productsRepository.productsCreate(productsData);
  console.log("entrei7", products);
  return products;
}

async function cartInfos(userId: number, productsId: number) {
  console.log("2", userId, productsId);
  const cartData = {
    userId,
    productsId,
  };
  console.log(cartData);

  const cart = await productsRepository.cartAdd(cartData);
  console.log("criou!", cart);
  return cart;
}

const productsService = {
  productsInfo,
  createSeller,
  findSellerId,
  cartInfos,
};

export default productsService;
