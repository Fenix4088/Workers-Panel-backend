const USER_NAME = process.env.MONGO_DB_USER_NAME || "Fenix";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "01027";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "cluster0.64aqv.mongodb.net/myFirstDatabase"; // bd for tests

const config = {
    MongoDBUris: `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`,
    PORT: 5000,
    jwtSecret: 'isAuthPassword'
}

exports.config = config