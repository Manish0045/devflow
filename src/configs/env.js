const required=[
    "MONGO_URI",
    "DB_NAME",
    "JWT_SECRET",
    "REFRESH_TOKEN_SECRET"
];

for(const key of required){
    if(!process.env[key]){
        throw new Error(`Missing required environment variable: ${key}`);
    }
}

module.exports={
    NODE_ENV:process.env.NODE_ENV||"development",
    PORT:process.env.PORT||5000,
    MONGO_URI:process.env.MONGO_URI,
    DB_NAME:process.env.DB_NAME,
    JWT_SECRET:process.env.JWT_SECRET,
    REFRESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN||"1d",
    REFRESH_TOKEN_EXPIRES_IN:process.env.REFRESH_TOKEN_EXPIRES_IN||"7d",
    CLIENT_URL:process.env.CLIENT_URL||"http://localhost:3000",
    LOG_LEVEL:process.env.LOG_LEVEL||"info"
}