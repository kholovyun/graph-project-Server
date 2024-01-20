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
    async addMovie(title: string, poster: string, genre: any): Promise<boolean>{
        try {
            await MovieModel.create({title, poster, genre})
            return true
        } catch (error: unknown) {
            const err = error as Error
            console.log(err)
            return false 
        }
    }
    async searchMovieByTitle(substring: string): Promise<any>{
        try {
            const escapedSubstring = substring.replace(/\s/g, '\\s');
            const data = await MovieModel.find({ title: { $regex: escapedSubstring, $options: 'i' } }).exec();
            return data
        } catch (error: unknown) {
            const err = error as Error
            console.log(err)
            return false 
        }
    }
}
const movieRep = new MovieRep()
export default movieRep