import { PrismaClient } from "./generated";
const prisma = new PrismaClient();

// if (process.env.NODE_ENV === "production") {
// 	prisma =
// } else {
// 	if (!global.prisma) {
// 		global.prisma = new PrismaClient();
// 	}
// 	prisma = global.prisma;
// }

export default prisma;
