import { Request, Response } from 'express';
import Movie from '../schema/movie';
import TopRatedMovie from '../schema/topRatedMovie';
import PopularMovie from '../schema/popularMovie';
import NowPlayingMovie from '../schema/nowPlayingMovie';
import upComingMovie from '../schema/upComingMovie';
import axios from 'axios';

const apiUrl = process.env.MOVIE_PNG_PREFIX;

export const saveToFavorite = async (req: Request, res: Response) => {
  
  try {
    let index = 1

    while (1){
      const movies = await axios.get(`${apiUrl}upcoming?api_key=${process.env.TMDB_KEY}&page=${index}`);
      console.log(index)
      if (movies && index < 150){
        for (let idx = 0; idx < movies.data.results.length; idx ++){
          const newMovie = new Movie(movies.data.results[idx])
          const newPopular = new upComingMovie({MovieNumber: movies.data.results[idx].id})
          try{
            await newPopular.save();
            await newMovie.save();
          } catch(err) {
            //console.log(err)
            //console.log(newMovie)
          }
                    
        }  
        index += 1
      } else{
        break;
      }
    }
    res.status(200).send();

  } catch (error) {
    return res.status(500).json({error: "Could not get the Movies"});
  }
};

// while (1){
//   const movies = await axios.get(`${apiUrl}top_rated?api_key=${process.env.TMDB_KEY}&page=${index}`);
//   console.log(index)
//   if (movies && index < 50){
//     for (let idx = 0; idx < movies.data.results.length; idx ++){
//       const newMovie = new Movie(movies.data.results[idx])
//       const newPopular = new TopRatedMovie({MovieNumber: movies.data.results[idx].id})
//       try{
//         await newPopular.save();
//         await newMovie.save();
//       } catch(err) {
//         console.log(err)
//         console.log(newMovie)
//       }
                
//     }  
//     index += 1
//   } else{
//     break;
//   }
// }

// let ids = []
//     let myMovies = []
//     while (1){
//       const movies = await axios.get(`${apiUrl}popular?api_key=${process.env.TMDB_KEY}&page=${index}`);
//       console.log(index)
//       if (movies && index <= 150){
//         for (let idx = 0; idx < movies.data.results.length; idx ++){
//           if (movies.data.results[idx].overview != "" )
//           {
//             myMovies.push(movies.data.results[idx])
//             ids.push({MovieNumber: movies.data.results[idx].id})
//           } 
//         }

//         const newMovie = new Movie()
//         const newPopular = new PopularMovie()
//         try{
//           await newPopular.collection.insertMany(ids);
//           await newMovie.collection.insertMany(myMovies);
          
//         } catch(err) {
//           console.log(err)
//           console.log(newMovie)
//         }
//         index += 1  
//         myMovies = []
//           ids = []  
//       } else{
//         break;
//       }

//     }