import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === 'GET') {
        var shajs = require('sha.js');
        try {
            await prisma.user.create({
                data: {
                    email: req.query.email,
                    username: req.query.username,
                    pass_hash: shajs('sha256').update(req.query.password).digest('hex'),
                },
            });
            return res.redirect('/reg-success');
        } catch (e) {
            if (e.code === 'P2002') {
                return res.redirect('/usr-exists');
            }
        }
    }
}
