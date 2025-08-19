import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises"
import { testPath } from './utils/testPath.js';

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async(req, res) => {

  const pathToResource = path.join(__dirname, "public", "index.html");
  const content = await fs.readFile(pathToResource);


  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content);

  

})

server.listen(PORT, () => console.log('connected on port 8000'))