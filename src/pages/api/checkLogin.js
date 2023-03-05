import { PrismaClient } from '@prisma/client';
import { getCookie, hasCookie } from 'cookies-next';
import requestIp from 'request-ip';

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === 'GET') {
        if (hasCookie('token', { req, res })) {
            const token = getCookie('token', { req, res });
            const ip = requestIp.getClientIp(req);

            const status = await prisma.userLogin.findMany({
                where: {
                    token: token,
                },
            });

            if (status.length > 0) {
                if (ip === status[0].ip) {
                    const user = await prisma.user.findMany({
                        where: {
                            id: status[0].user_id,
                        },
                    });
                    res.status(200).json({ success: true, user: user[0].username });
                } else {
                    res.status(200).json({ success: false });
                }
            } else {
                res.status(200).json({ success: false });
            }
        } else {
            res.status(200).json({ success: false });
        }
    }
}
