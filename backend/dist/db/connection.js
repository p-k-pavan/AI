import { connect } from "mongoose";
import { disconnect } from "mongoose";
async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (e) {
        throw new Error("Cannot connect to DB");
    }
}
async function disconnectFromDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from DB");
    }
}
export { connectToDB, disconnectFromDB };
//# sourceMappingURL=connection.js.map