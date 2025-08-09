import http from 'node:http';
import path from 'node:path';
import { testPath } from './utils/testPath.js';

const PORT = 8000;

const __dirname = import.meta.dirname;

// console.log("CWD: ", process.cwd());
// console.log("Directory Name: ", import.meta.dirname);

const server = http.createServer((req, res) => {

  const absPathToResource = path.join(__dirname, "public", "index.html");
  const relPathToResource = path.join("public", "index.html");
  console.log("absolute path: ", absPathToResource);
  console.log("relative path:", relPathToResource);
  testPath(__dirname);
  
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))