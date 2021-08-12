import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("dburi") as string;
  console.log("here");
  return mongoose
  .connect(dbUri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));
}

export default connect;