import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function reg(req, res) {
    if (req.method === 'POST') {
        var shajs = require('sha.js');
        try {
            await prisma.user.create({
                data: {
                    email: req.body.email,
                    username: req.body.username,
                    pass_hash: shajs('sha256').update(req.body.password).digest('hex'),
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
