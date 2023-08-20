import { Request, Response } from 'express';
import axios from 'axios';

const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const getHomePage = async (req: Request, res: Response) => {
  try {
    const movies = await axios.get(`${apiUrl}${process.env.POPULAR}ai_key=${process.env.TMDB_KEY}`);
    res.status(200).send(movies.data);

  } catch (error) {
    return res.status(500).json({error: ""});
  }
};