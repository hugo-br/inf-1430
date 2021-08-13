import "reflect-metadata";
import "module-alias/register";

import express, { Express, RequestHandler } from "express";
import cors from "cors";
//import morgan from 'morgan';
import config from "config";
import connect from "./db/connect";
import routes from "./routes/routes";
import compression from "compression";
import { deserializeUser } from "./middleware";

const app = express();
const host = config.get("host") as string;
const port = config.get("port") as number;

// middleware
app.use(deserializeUser);
app.use(compression()); //Compress all routes
//app.use(morgan('combined') as any);
app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: false }) as RequestHandler);
app.use(cors());

app.listen(port, host, () => {
  console.log(`Listen on http://${host}:${port}`);
  connect();
  routes(app);
});
