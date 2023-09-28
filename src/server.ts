import express, {Request, Response} from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import mainRoutes from './routes/index';
import path from 'path';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
});

server.listen(process.env.PORT);