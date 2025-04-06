/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from "firebase-functions";
import express from "express";
//initialize express server
const app = express();
const main = express();

app.get("/hello-world", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

//add the path to receive request and set json as bodyParser to process the body
main.use("/api/v1", app);

//define google cloud function name
export const webApi = functions.https.onRequest(main);

// https://github.com/inversify/inversify-express-utils
// https://github.com/inversify/inversify-express-example
// https://dev.to/vishnucprasad/clean-architecture-with-inversify-in-nodejs-with-typescript-a-code-driven-guide-4oo7
// https://dev.to/msplatam/how-to-use-inversifyjs-and-utils-with-nodejs-typescript-2pn
// https://medium.com/@gurkan.demir/a-clean-approach-to-validations-using-inversify-express-validator-7e94c6e38bcb
// https://inversify.io/
