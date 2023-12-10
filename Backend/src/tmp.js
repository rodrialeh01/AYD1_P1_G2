import app from "./index.js";
import { API_PORT } from "./config/credentials.js";

app.listen(API_PORT);
console.log(`Server on port ${API_PORT}`);