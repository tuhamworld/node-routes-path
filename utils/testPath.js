import path from "node:path";

export const testPath = (dir) => {
    // const relPathToResource = path.join("public", "index.html");
    const absPathToResource = path.join(dir, "public", "index.html");
    // console.log("test path: ", relPathToResource);
    console.log("test absolute path: ", absPathToResource);
}