import genreRep from "../repository/genreRepository/genre";
import movieRep from "../repository/movieRepository/movie";

export const typeDefs = `
  type Movie {
    id: ID!
    title: String!
    poster: String
    genre: Genre
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Query {
    getMovie(id: ID!): Movie
    getAllMovies: [Movie]
    getGenres: [Genre]
    searchMovie(title: String!): [Movie]
  }

  type Mutation {
    addMovie(title: String!, poster: String!, genre: ID!): Movie 
    deleteMovie(id: ID!): Boolean
  }
`;


export const resolvers = {
  Query: {
    getAllMovies: async() => {
      const response = await movieRep.getMoviesList();
      return response 
    },
    getGenres: async() => {
      const genres = await genreRep.getGenryList();
      return genres
    },
    async getMovie  (parent: any, args: {id: string}, context: any, info: any) {
      const { id } = args;
      const movie = await movieRep.getMovieById(id)
      return movie
    },
    async searchMovie  (parent: any, args: {title: string}, context: any, info: any) {
      const { title } = args;
      const movie = await movieRep.searchMovieByTitle(title)
      return movie
    }
  },
  Mutation: {
    async addMovie (parent: any, args:{title: string, poster: string, genre: any}, context: any, info: any) {
      const {title, poster, genre} = args
      await movieRep.addMovie(title, poster, genre) 
    }
  }
};
