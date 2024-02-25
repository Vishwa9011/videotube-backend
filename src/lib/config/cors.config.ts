import { CorsOptionsDelegate, CorsRequest } from "cors";
import { environment } from "./dotenv.config";

const allowList = ["http://localhost:3000"];

export const corsOptionsDelegate: CorsOptionsDelegate<CorsRequest> = (req, callback) => {
  if (environment != "production") {
    callback(null, { origin: true, credentials: true });
    return;
  }

  let corsOptions = {};
  if (req.headers.origin && allowList.indexOf(req.headers.origin) !== -1) {
    corsOptions = { origin: true, credentials: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
