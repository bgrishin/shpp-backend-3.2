import {NextFunction, Request, Response} from "express";

export function authentication(req: Request, res: Response, next: NextFunction) {
    let authheader = req.headers.authorization;

    if (!authheader) {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401);
        return res.send({
            error: '401 Unauthorized'
        })
    }

    let auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    let user = auth[0];
    let pass = auth[1];

    if (user == 'admin' && pass == 'admin') {
        next();
    } else {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401);
        return res.send({
            error: '401 Unauthorized'
        })
    }
}