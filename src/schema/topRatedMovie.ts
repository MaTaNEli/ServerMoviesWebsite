import mongoose from 'mongoose';
const { Schema } = mongoose;

interface ITopRatedMovie {
  MovieNumber: number;
}

const userSchema = new Schema<ITopRatedMovie> ({
  MovieNumber: { type: Number, required: true, unique: true },
});

const TopRatedMovie = mongoose.model<ITopRatedMovie>('TopRatedMovie', userSchema);

export default TopRatedMovie;