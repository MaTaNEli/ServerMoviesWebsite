import express, { Response, Request } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Creat the Express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true}));
app.use(cors({origin: process.env.CLIENT_URL}));

// Fetch all the routes for the application
import homaPage from './routes/homaPage';
import detailedMovie from './routes/detailedMovie'
import topRated from './routes/topRated'
import checkValidated from './routes/checkValidated';
import nowPlaying from './routes/nowPlaing'
import upComing from './routes/upComing'

function errHandler(req: Request, res: Response){
  res.status(404).json({error: "Sorry could not find the page"});
}

// Routes
app.use('/topRated', topRated);
app.use('/upComing', upComing);
app.use('/nowPlaying', nowPlaying);
app.use('/checkValidated', checkValidated);
app.use('/', detailedMovie);
app.use('/', homaPage);




//Get all the err without crash
app.use(errHandler);

export default app;
