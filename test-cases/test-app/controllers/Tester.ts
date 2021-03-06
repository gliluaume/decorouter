import { NextFunction, Request, Response } from 'express';
import { Get, middleware } from '../../..';
import { Track } from '../custom-decorator';
import { track } from '../middleware';

export default class Tester {
    @Get('/test/stat')
    public static stat(req: Request, res: Response, next: NextFunction) {
        res.json({ tag: 'static fun' });
    }
    @Get('/test')
    public get(req: Request, res: Response, next: NextFunction) {
        res.json({ nom: 'Roger' });
    }
    @middleware(track)
    @Get('/track')
    public blup(req: Request, res: Response, next: NextFunction) {
        res.json({ nom: 'Roger' });
    }
    @Track
    @Get('/track-alias')
    public blop(req: Request, res: Response, next: NextFunction) {
        res.json({ nom: 'Roger' });
    }
}
