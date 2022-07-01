import path from "path"

const project_root = path.resolve(path.dirname(path.dirname(path.dirname(__dirname))));
const server_root = path.resolve(path.dirname(__dirname));

export default {
    port : 9253,
    projectRoot: project_root,
    serverRoot: server_root,
    security : {
        sha_key: "GggG@GggG",
        session_key: "Ry@yR",
    },
}
