import { prop, getModelForClass } from '@typegoose/typegoose';
import mongoose from "mongoose";

export class TvShow {
  @prop()
  backdrop_path?: string;

  @prop({ type: () => [Number], required: true })
  genre_ids!: number[];

  @prop({ required: true, unique: true })
  id!: number;

  @prop({ required: true })
  name!: string;

  @prop({ type: () => [String] })
  origin_country!: string[];

  @prop({ required: true })
  original_language!: string;

  @prop({ required: true })
  original_name!: string;

  @prop({ required: true })
  overview!: string;

  @prop({ required: true })
  popularity: number;

  @prop()
  poster_path: string;

  @prop({ required: true })
  first_air_date: string;

  @prop({ required: true })
  vote_average: number;

  @prop({ required: true })
  vote_count: number;

  @prop({ default: false })
  popular: boolean;

  @prop({ default: false })
  on_the_air: boolean;

  @prop({ default: false })
  topRated: boolean;

  @prop({ default: false })
  airing_today: boolean;
}

const TvShowModle = getModelForClass(TvShow);

export default TvShowModle;