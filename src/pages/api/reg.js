import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === "POST") {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                username: req.body.username,
                pass_hash: req.body.password
            }
        });
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    }
}