import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import routes from './routes/posts.js';


import mongoose from 'mongoose';
mongoose.connect(`mongodb+srv://kelvin80121:${process.env.DB_CONNECTION_STRING}@data.jwpjq7h.mongodb.net/`)
  .then(res=> console.log("連線資料成功"))
  .catch(err=> console.log("連線資料失敗"));

const app = async(req, res) => {
  routes(req, res);
}
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);

