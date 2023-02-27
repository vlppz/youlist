import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === "POST") {
        var shajs = require('sha.js')
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                username: req.body.username,
                pass_hash: shajs("sha256").update(req.body.password).digest("hex")
            }
        });
        user.id = user.id.toString();

        res.status(200).json(user);
    }
}