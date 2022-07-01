import path from "path";
import { spawn } from "child_process"
import common from "./common";

const srcPath = path.join(common.serverRoot, "src");
let NODE_PATH = `${common.serverRoot}:${srcPath}`;

if(process.platform == 'win32')  {
    NODE_PATH = `${common.serverRoot};${srcPath}`;
}

spawn(`cd ${common.serverRoot} && ts-node --project ./tsconfig.json ./src/index.ts`, {
     shell: true, stdio: 'inherit', env: { NODE_PATH: NODE_PATH}
});