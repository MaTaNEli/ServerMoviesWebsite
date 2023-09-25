import { Request, Response } from 'express';
import MovieModle from '../schema/movie';
import axios from 'axios';

const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const saveToFavorite = async (req: Request, res: Response) => {
  
  
};


// try {
//   let index = 1
//   let filter

//   //let myMovies = []
//   while (1){
//     const movies = await axios.get(`${apiUrl}upcoming?api_key=${process.env.TMDB_KEY}&page=${index}`);
//     console.log(index)
//     if (movies && index <= 200){
//       for (let idx = 0; idx < movies.data.results.length ; idx ++){
//         if (movies.data.results[idx].overview != "" )
//         {
//           filter = movies.data.results[idx].id
//           let movie = movies.data.results[idx]
//           //movie.popular = true;
//            movie.upComing = true;
//            //movie.topRated = true;
//           //movie.nowPlaying = true;
//           //console.log(filter)
//           //myMovies.push(movie)
//           try{
//           await MovieModle.findOneAndUpdate({id: filter}, movie, {new: true, upsert: true})
//           } catch(err) {
//             console.log(err)
//             //console.log(newMovie)
//           }
//         } 
//       }
//       // try{
//       //   await MovieModle.insertMany(myMovies);
        
//       // } catch(err) {
//       //   console.log(err)
//       // }
//       index += 1  
//       //myMovies = [] 
//     } else{
//       break;
//     }

//   }
  
//   res.status(200).send();

// } catch (error) {
//   return res.status(500).json({error: "Could not get the Movies"});
// }