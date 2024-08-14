"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Insert 
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
// const res = await prisma.user.create({
//     data: {
//         username,
//         firstName,
//         lastName,
//         password,
//     },
//     select: {
//         id: true,
//         password: true
//     }
// })
// console.log(res)
// }
// insertUser("krishaagja1@gmail.com", "123456", "Krish", "Aagja")
// Update
// interface UpdateParams {
//     firstName: string,
//     lastName: string
// }
// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: { username: username },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// updateUser(
//     "krishaagja1@gmail.com", {
//         firstName: "Aagja",
//         lastName: "Krish"
//     }
// )
// Get user's details
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                username
            }
        });
        console.log(res);
    });
}
getUser("krishaagja1@gmail.com");
