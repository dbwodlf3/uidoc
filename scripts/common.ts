import path from "path";

const projectRoot = path.resolve(path.dirname(__dirname))

export default {
    projectRoot: projectRoot,
    clientRoot: path.resolve(path.join(projectRoot, "src", "client")),
    serverRoot: path.resolve(path.join(projectRoot, "src", "server"))
}
