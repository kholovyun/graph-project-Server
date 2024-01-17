import { MongoClient } from "mongodb";
import mongoose, { Mongoose } from "mongoose";

const urlDb = "mongodb+srv://vlad:vlad@cluster0.3uboqj7.mongodb.net/graphDb?retryWrites=true&w=majority";


const client = new MongoClient(urlDb);

export default class MongoRep {
    private client: Mongoose | null = null

    public close = async(): Promise<void> => {
          await mongoose.disconnect()
    } 

    public init = async():  Promise<void> => {
        try {
            this.client = await mongoose.connect(urlDb);
            console.log('Mongo is connected successfully')
        } catch (error) {
            console.log(error)
        }
    }
};
