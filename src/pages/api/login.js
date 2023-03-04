import { PrismaClient } from '@prisma/client';
import requestIp from 'request-ip';
import { setCookie } from 'cookies-next';

const prisma = new PrismaClient();

export default async function login(req, res) {
    if (req.method === 'POST') {
        var shajs = require('sha.js');
        const ip = requestIp.getClientIp(req);

        const user = await prisma.user.findMany({
            where: {
                username: req.body.username,
                pass_hash: shajs('sha256').update(req.body.password).digest('hex'),
            },
        });

        const logins = await prisma.userLogin.findMany({
            where: {
                ip: ip,
            },
        });

        if (user.length === 0) {
            res.status(200).redirect('/login?error=Incorrect username or password!');
        } else {
            var status;
            if (logins.length === 0) {
                status = await prisma.userLogin.create({
                    data: {
                        user_id: user[0].id,
                        ip: ip,
                    },
                });
                setCookie('token', status.token, { req, res });
            } else {
                setCookie('token', logins[0].token, { req, res });
            }

            res.status(200).redirect('/');
        }
    }
}
