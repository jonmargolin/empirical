
import dotenv from "dotenv";
import http from "./index";

// initialize configuration
dotenv.config();
//const port = process.env.SERVER_PORT;
const port = 5000
http.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Express server listening on port " + port);
});
