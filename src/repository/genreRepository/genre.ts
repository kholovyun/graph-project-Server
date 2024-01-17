import { Genre, GenreModel, MovieModel } from "../../models/Movies";

export class GenreRep {
    async getGenryList(): Promise<Genre[] | null | undefined>{
        try {
            const genreData: Genre[] | null = await GenreModel.find()
            return genreData
        } catch (error: unknown) {
            const err = error as Error
            console.log(err.message)
        }
    }
}
const genreRep = new GenreRep()
export default genreRep