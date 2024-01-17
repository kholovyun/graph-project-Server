import { Movie, MovieModel } from "../../models/Movies";

export class MovieRep {
    async getMoviesList(): Promise<Movie[] | null | undefined>{
        try {
            const moviesData: Movie[] | null = await MovieModel.find().populate('genre')
            return moviesData
        } catch (error: unknown) {
            const err = error as Error
            console.log(err.message)
        }
    }
    async getMovieById(id: string): Promise<Movie | null | undefined>{
        try {
            const movieData: Movie | null = await MovieModel.findById(id).populate('genre')
            return movieData
        } catch (error: unknown) {
            const err = error as Error
            console.log(err.message)
        }
    }
}
const movieRep = new MovieRep()
export default movieRep