import { prop, getModelForClass } from '@typegoose/typegoose';

class Favorites {
  @prop({ required: true })
  Userid!: number;

  @prop({ required: true })
  Movieid: number;

  @prop({ required: true })
  TvShowid: number;
}

const FavoriteModle = getModelForClass(Favorites);

export default FavoriteModle;
