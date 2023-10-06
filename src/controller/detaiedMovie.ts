import { Request, Response } from 'express';
import MovieModle from '../schema/movie';
import TvShowModle from '../schema/tvShow';

export const getDetailedMovie = async (req: Request, res: Response) => {
  try {
    const results = (req['params']['genre'] == 'Movies') ? 
      await MovieModle.findOne({id: req['params']['id']}).exec() :
      await TvShowModle.findOne({id: req['params']['id']}).exec()

    res.status(200).send(results);

  } catch (error) {
    return res.status(500).json({error: "Could not get the Detailed Movies"});
  }
};