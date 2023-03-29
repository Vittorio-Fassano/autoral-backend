import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  let postAdress = await prisma.address.createMany({
    data: 
      {
        cep: 25660011,
        state: "rio de janeiro",
        city: "petrópolis",
        local: "rua duque de caxias",
        userId: 1,
      },
  });
  console.log("create user addressed", postAdress);

  let newProduct = await prisma.products.createMany({
    data: [
      {
        name: "camisa fluminense grena 2022",
        price: 200,
        userId: 1,
      },
      {
        name: "camisa fluminense 120 anos",
        price: 220,
        userId: 1,
      },
    ],
  });
  console.log("create products seed", newProduct);
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
