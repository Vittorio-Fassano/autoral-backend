import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
  // let user = await prisma.event.findFirst();
  // if (user || !user) {
  //   user = await prisma.event.create({
  //     data: {
  //       title: "brechoFut",
  //     },
  //   });
  // }

  console.log("create seed without any values");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
