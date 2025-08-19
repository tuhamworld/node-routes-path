import http from "node:http";
import path from "node:path";
import fs from "node:fs"
import { testPath } from './utils/testPath.js';

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer((req, res) => {

  const pathToResource = path.join(__dirname, "public", "index.html");
  // const content = fs.readFileSync(pathToResource, "utf-8");

  fs.readFile(pathToResource, "utf-8", (err, content) => {
    if (err) {
      console.log(err)
      return
    }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(content);
  })
  

})

server.listen(PORT, () => console.log('connected on port 8000'))