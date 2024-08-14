import { PrismaClient } from "@prisma/client";
import { futimesSync, rmSync } from "fs";

const prisma = new PrismaClient();

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

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            username
        }
    })
    console.log(res)
}

getUser("krishaagja1@gmail.com")