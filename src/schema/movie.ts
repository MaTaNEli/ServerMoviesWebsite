import { prop, getModelForClass } from '@typegoose/typegoose';

export class Movies {
  @prop({ required: true })
  adult!: boolean;

  @prop()
  backdrop_path?: string;

  @prop({ type: () => [Number], required: true })
  genre_ids!: number[];

  @prop({ required: true, unique: true })
  id!: number;

  @prop({ required: true })
  original_language!: string;

  @prop({ required: true })
  original_title!: string;

  @prop({ required: true })
  overview!: string;

  @prop({ required: true })
  popularity: number;

  @prop({ required: true })
  poster_path: string;

  @prop({ required: true })
  release_date: string;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  video: boolean;

  @prop({ required: true })
  vote_average: number;

  @prop({ required: true })
  vote_count: number;

  @prop({ default: false })
  popular: boolean;

  @prop({ default: false })
  nowPlaying: boolean;

  @prop({ default: false })
  topRated: boolean;

  @prop({ default: false })
  upComing: boolean;
}

const MovieModle = getModelForClass(Movies);

export default MovieModle;