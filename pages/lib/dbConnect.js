import mongoose from "mongoose";

const URI = 'mongodb://andrepeixoto:5pM87zGweaK0cd1T@ac-rpoiokd-shard-00-00.1zspnmi.mongodb.net:27017,ac-rpoiokd-shard-00-01.1zspnmi.mongodb.net:27017,ac-rpoiokd-shard-00-02.1zspnmi.mongodb.net:27017/test?replicaSet=atlas-60f9j7-shard-0&ssl=true&authSource=admin'

// const connectMongo = async () => mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
const connectMongo = async () => mongoose.connect(URI);
export default connectMongo;

