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

/*
{
			"backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
			"first_air_date": "1952-12-26",
			"genre_ids": [
				10763
			],
			"id": 94722,
			"name": "Tagesschau",
			"origin_country": [
				"DE"
			],
			"original_language": "de",
			"original_name": "Tagesschau",
			"overview": "German daily news program, the oldest still existing program on German television.",
			"popularity": 3186.016,
			"poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
			"vote_average": 7.5,
			"vote_count": 145
		}
    */