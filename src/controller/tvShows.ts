import { Request, Response } from 'express';
import { types } from "@typegoose/typegoose";
import TvShowModle, {TvShow} from '../schema/tvShow';

const apiUrl = process.env.MOVIE_PNG_PREFIX;
const AMOUNT = 20;

export const getTvShows = async (req: Request, res: Response) => {
  const page = +req['params']['page']
  const searchVal = req['params']['url']

  try {
    const results: types.DocumentType<TvShow>[] = await TvShowModle.find({[searchVal]: true}).
                                      limit(AMOUNT).skip(page).sort({popularity: -1}).exec()
    if (results.length)
      res.status(200).send(results);
    else
      res.status(204).send();

  } catch (error) {
    return res.status(500).json({error: "Could not get the Movies"});
  }
};