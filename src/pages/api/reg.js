import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === "POST") {
        var shajs = require('sha.js');
        try {
            await prisma.user.create({
                data: {
                    email: req.body.email,
                    username: req.body.username,
                    pass_hash: shajs("sha256").update(req.body.password).digest("hex")
                }
            });
            res.status(200).redirect("/login?success=Registered successfully!")
        } catch (e) {
            if (e.code === "P2002") {
                res.status(200).redirect("/signup?error=This user already exists!");
            }
        }
    }
}
