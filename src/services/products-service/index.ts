/* eslint-disable @typescript-eslint/no-unused-vars */
import productsRepository from "@/repositories/products-repository";
import { response } from "express";

async function productsInfo( name: string, price: number, userId: number) {
  const productsData = {
    name,
    price,
    userId
  };
  console.log("entrei6", productsData);

  const newProduct = await productsRepository.productsCreate(productsData);
  console.log("entrei7", newProduct);
  return response.send(newProduct);
}

const productsService = {
  productsInfo,
};

export default productsService;
