import path from "node:path";

export const testPath = (dir) => {
    const absPathToResource = path.join(dir, "public", "index.html");
    console.log("test absolute path: ", absPathToResource);
}