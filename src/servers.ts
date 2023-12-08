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
import getMovies from './routes/homaPage';
import detailedMovie from './routes/detailedMovie'
import checkValidated from './routes/checkValidated';
import saveToFavorite from './routes/saveToFavorite';
import getTvShows from './routes/getTvShows';
import signOut from './routes/signOut';
function errHandler(req: Request, res: Response){
  res.status(404).json({error: "Sorry could not find the page"});
}

// Routes
app.use('/saveToFavorite', saveToFavorite);
app.use('/checkValidated', checkValidated);
app.use('/tvShow', getTvShows);
app.use('/details', detailedMovie);
app.use('/signOut', signOut);
app.use('/', getMovies);





//Get all the err without crash
app.use(errHandler);

export default app;
