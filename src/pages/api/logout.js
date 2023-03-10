import { PrismaClient } from '@prisma/client';
import { getCookie } from 'cookies-next';

const prisma = new PrismaClient();

export default async function logout(req, res) {
    if (req.method === 'POST') {
        const token = getCookie('token', { req, res });

        await prisma.userLogin.delete({
            where: {
                token: token,
            },
        });

        res.status(200).json({ success: true });
    }
}
