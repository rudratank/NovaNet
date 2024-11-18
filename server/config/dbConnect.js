import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const conn =mongoose.connect(process.env.MONG0DB_URL);
        console.log("Database Connected Successfully.");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default dbConnect;