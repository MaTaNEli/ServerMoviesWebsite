import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IPopularMovie {
  MovieNumber: number;
}

const userSchema = new Schema<IPopularMovie> ({
  MovieNumber: { type: Number, required: true, unique: true},
});

const PopularMovie = mongoose.model<IPopularMovie>('PopularMovie', userSchema);

export default PopularMovie;