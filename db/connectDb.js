
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect(`mongodb+srv://sunilbejesh:KuZvebx1DpgiPSeM@cluster0.ngfwe.mongodb.net/chai?retryWrites=true&w=majority&appName=Cluster0`, {
                useNewUrlParser: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
            console.error("Error while db connection",error.message);
            // process.exit(1);
        }
    }

  export default connectDb;
  