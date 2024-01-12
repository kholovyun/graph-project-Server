export const typeDefs = `
  type Movie {
    id: String!
    title: String!
    poster: String
  }

  type Query {
    getMovie(id: String!): Movie
    getAllMovies: [Movie]
  }

  type Mutation {
    addMovie(title: String!, poster: String): Movie
    updateMovie(id: String!, title: String, poster: String): Movie
    deleteMovie(id: String!): Boolean
  }
`;

export const resolvers = {
  Query: {
    getMovie: (parent: string, context: string, info: string) => {
    },
    getAllMovies: (parent: string, args: string, context: string, info: string) => {
    },
  },
  Mutation: {
    addMovie: (parent:string, context:string, info:string) => {
    },
    updateMovie: (parent:string, context:string, info:string) => {
    },
    deleteMovie: (parent:string, context:string, info:string) => {
    },
  },
};
