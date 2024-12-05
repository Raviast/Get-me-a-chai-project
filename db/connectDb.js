
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(`mongodb+srv://sunilbejesh:KuZvebx1DpgiPSeM@cluster0.ngfwe.mongodb.net/chai?retryWrites=true&w=majority&appName=Cluster0`, {
                useUnifiedTopology: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error("Error while db connection",error.message);
            // process.exit(1);
        }
    }

  export default connectDb;


// const connectMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true, // Only necessary options
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB', error);
//     throw error;
//   }
// };

// export default connectMongo;
