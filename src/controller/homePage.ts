import { Request, Response } from 'express';
import axios from 'axios';

const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const getHomePage = async (req: Request, res: Response) => {
  const page = req['params']['page']
  const url = req['params']['url']
  console.log(`${apiUrl}${url}?api_key=${process.env.TMDB_KEY}&page=${page}`)
  try {
    const movies = await axios.get(`${apiUrl}${url}?api_key=${process.env.TMDB_KEY}&page=${page}`);
    res.status(200).send(movies.data);

  } catch (error) {
    return res.status(500).json({error: "Could not get the Movies"});
  }
};