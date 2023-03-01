import { PrismaClient } from '@prisma/client'
import requestIp from 'request-ip'

const prisma = new PrismaClient();

export default async function login(req, res) {
    if (req.method === "POST") {
        var shajs = require('sha.js');
        const ip = requestIp.getClientIp(req);

        const user = await prisma.user.findMany({
            where: {
                username: req.body.username,
                pass_hash: shajs("sha256").update(req.body.password).digest("hex")
            }
        });

        if (user.length === 0) {
            res.status(200).json({ success: false });
        } else {
            await prisma.userLogin.create({
                data: {
                    user_id: user[0].id,
                    ip: ip
                }
            });
            res.status(200).json({ success: true });
        }
    }
}
