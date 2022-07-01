import path from "path";
import { spawn } from "child_process"
import common from "./common";

const srcPath = path.join(common.serverRoot, "src");
let NODE_PATH = `${common.serverRoot}:${srcPath}`;

if(process.platform == 'win32')  {
    NODE_PATH = `${common.serverRoot};${srcPath}`;
}

new Promise((resolve, reject)=>{
    spawn(`cd ${common.projectRoot} && npm i`, {
        shell: true, stdio: 'inherit'
    }).on("close", ()=>{ resolve(false)});
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        spawn(`cd ${common.serverRoot} && npm i`, {
            shell: true, stdio: 'inherit'}).on("close", ()=>{ resolve(true)});
    })
}).then(()=>{
    return new Promise((resolve, reject)=>{
        spawn(`cd ${common.clientRoot} && npm i`, {
            shell: true, stdio: 'inherit'}).on("close", ()=>{ resolve(true)});
    })
})