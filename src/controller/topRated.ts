import { Request, Response } from 'express';
import axios from 'axios';

const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const getTopRatedPage = async (req: Request, res: Response) => {
  try {
    const movies = await axios.get(`${apiUrl}${process.env.RATED}api_key=${process.env.TMDB_KEY}`);
    res.cookie('sfb', 'dbdb', { expires: new Date(Date.now() + 3600000), httpOnly: true })
    res.status(200).send(movies.data);

  } catch (error) {
    return res.status(500).json({error: "Could not get the Movies"});
  }
};