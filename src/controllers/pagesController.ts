import { Response, Request } from "express";

export const home = (req: Request, res: Response) => {
    res.send('home no controle')
}
export const dogs = (req: Request, res: Response) => {
    // res.render('/dogs')
}
export const cats = (req: Request, res: Response) => {
    // res.render('/cats')
}
export const fishies = (req: Request, res: Response) => {
    // res.render('/fishies')
}