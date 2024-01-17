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
  }

  type Mutation {
    addMovie(title: String!, poster: String, genreId: ID!): Movie
    updateMovie(id: ID!, title: String, poster: String, genreId: ID!): Movie
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
    //@ts-ignore
    async getMovie  (parent, args, context, info) {
      const { id } = args;
      const movie = await movieRep.getMovieById(id)
      return movie
    }
  },
  Mutation: {
   
  }
};
