import express, { Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Creat the Express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: '*'}));
app.use(cors({origin: process.env.CLIENT_URL}));

// Fetch all the routes for the application
import homaPage from './routes/homaPage';
import detailedMovie from './routes/detailedMovie'
import topRated from './routes/topRated'

function errHandler(req: Request, res: Response){
  res.status(404).json({error: "Sorry could not find the page"});
}

// Routes
app.use('/', homaPage);
app.use('/topRated', topRated);
app.use('/', detailedMovie);



//Get all the err without crash
app.use(errHandler);

export default app;
