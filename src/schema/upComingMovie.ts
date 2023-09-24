import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IUpComingMovie {
  MovieNumber: number;
}

const userSchema = new Schema<IUpComingMovie> ({
  MovieNumber: { type: Number, required: true, unique: true },
});

const UpComingMovie = mongoose.model<IUpComingMovie>('UpComingMovie', userSchema);

export default UpComingMovie;