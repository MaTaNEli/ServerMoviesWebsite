import express, { Response, Request } from 'express';
import cors from 'cors';

// Creat the Express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: '*'}));

// Fetch all the routes for the application
import homaPage from './routes/homaPage';
import detailedMovie from './routes/detailedMovie'

function errHandler(req: Request, res: Response){
  res.status(404).json({error: "Sorry could not find the page"});
}

// Routes
app.use('/', homaPage);
app.use('/', detailedMovie)



//Get all the err without crash
app.use(errHandler);

export default app;
