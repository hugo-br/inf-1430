import mongoose from "mongoose";
import config from "config";

function connect() {
  const dbUri = config.get("dburi") as string;
  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then((db) => console.log("base de donnée connectée"))
    .catch((err) => console.log(err));
}

export default connect;
