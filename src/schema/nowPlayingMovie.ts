import mongoose from 'mongoose';
const { Schema } = mongoose;

interface INowPlayingMovie {
  MovieNumber: number;
}

const userSchema = new Schema<INowPlayingMovie> ({
  MovieNumber: { type: Number, required: true, unique: true },
});

const NowPlayingMovie = mongoose.model<INowPlayingMovie>('NowPlayingMovie', userSchema);

export default NowPlayingMovie;