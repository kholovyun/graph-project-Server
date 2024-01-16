import { MongoClient } from "mongodb";

const url = "mongodb+srv://vlad:vlad@cluster0.3uboqj7.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(url);

const dbInit = async() => {
    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (error) {
        console.log(error)
    } finally {
      await client.close();
    } 
  }

  export default dbInit