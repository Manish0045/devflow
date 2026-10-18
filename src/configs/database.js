const mongoose=require("mongoose");
const {MONGO_URI}=require("../configs/env");
const logger=require("../utils/logger");

async function connectDB() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
            maxPoolSize:10,
            dbName:DB_NAME
        });

        logger.info("MongoDB connected");
    } catch (error) {
        console.error("Error while connecting to database!",error.message);
        process.exit(1);
    }
}

module.exports=connectDB;