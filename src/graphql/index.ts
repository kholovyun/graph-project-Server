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

const moviesData = [
  { id: '1', title: 'The Lord Of the Ring', poster: 'https://cdn.europosters.eu/image/750/posters/lord-of-the-rings-fellowship-i11723.jpg', genreId: '3' },
  { id: '2', title: 'Astral', poster: 'https://m.media-amazon.com/images/M/MV5BOTFlOGE5OTYtYjhiZS00MWIwLTkyZTktYjUyODc2NjEzOWZiXkEyXkFqcGdeQXVyMzQwNDE2NDg@._V1_.jpg', genreId: '1' },
  { id: '3', title: 'Avatar', poster: 'https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg', genreId: '3' },
  { id: '4', title: 'Green Mile', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqhAN3xRiv2qrAyShACay8T12_LbD09SU5Q&usqp=CAU', genreId: '4' },
  { id: '5', title: 'Green Book', poster: 'https://m.media-amazon.com/images/I/91PWXIp8FOL._AC_UF894,1000_QL80_.jpg', genreId: '4' },
  { id: '6', title: 'Shrek', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvc7I6I2-p4sLdrxzr8R316rJrRwtR5XUxQ&usqp=CAU', genreId: '3' },
  { id: '7', title: 'Troy', poster: 'https://musicart.xboxlive.com/7/dce21100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', genreId: '2' },
  { id: '8', title: 'Gladiator', poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v8_ae.jpg', genreId: '2' },
  { id: '9', title: 'Wolvorine', poster: 'https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', genreId: '1' },
  { id: '10', title: 'Spider man', poster: 'https://m.media-amazon.com/images/I/51QyIoLnBsL._AC_UF894,1000_QL80_.jpg', genreId: '2' },
];

const genres = [
  { id: '1', name: 'Horror' },
  { id: '2', name: 'Adventure' },
  { id: '3', name: 'Comedy' },
  { id: '4', name: 'Drama'}
];

export const resolvers = {
  Query: {
    getAllMovies: () => moviesData,
    getGenres: () => genres,
  },
  Mutation: {
   
  },
  Movie: {
    genre: (movie: any) => genres.find(genre => genre.id === movie.genreId),
  },
};
