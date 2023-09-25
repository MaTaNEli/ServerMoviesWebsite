import { Request, Response } from 'express';
import MovieModle, { Movies } from '../schema/movie';
const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const getDetailedMovie = async (req: Request, res: Response) => {
  try {
    const results = await MovieModle.findOne({id: req['params']['id']}).exec()

    res.status(200).send(results);

  } catch (error) {
    return res.status(500).json({error: "Could not get the Detailed Movies"});
  }
};