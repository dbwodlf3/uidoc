import path from "path";
import http from "http";
import fs from "fs";
import router from "./router/router"

import express from "express";
import morgan from "morgan";
import * as njk from "nunjucks";

import settings from "./settings";
const app = express();

import livereload from 'livereload'
import livereloadMiddleware from 'connect-livereload'

console.log(`NODE_ENV is ${process.env['NODE_ENV']}`);

process.env.NODE_ENV

// if( process.env['NODE_ENV'] == 'develop' || process.env['NODE_ENV'] === undefined ) {

//     const liverServer = livereload.createServer({
//         exts: ['html', 'css', 'njk', 'js'],
//         debug: true
//     });

//     liverServer.watch(path.join(settings.serverRoot, "static/js"));
//     liverServer.watch(path.join(settings.serverRoot, "static/template"));
//     app.use(livereloadMiddleware());

// }

app.use(morgan(':method :url :status :res[content-length] - :response-time ms', {
    skip: function (req, res) {
        return false;
    }
}));

const njk_env = njk.configure(path.join(settings.serverRoot, 'static', 'templates'), {
    "autoescape": true,
    "watch": true,
    "express": app
});

njk_env.addGlobal('static', "/static");
njk_env.addFilter('date', (str)=>{
    return new Date(str).toDateString();
})
njk_env.addFilter('dateAgo', (str)=>{
    const current_date = new Date();
    const date = new Date(str);
    const date_gap = current_date.getTime() - date.getTime();
    const days = Math.floor(date_gap / (60 * 60 * 24 * 1000));
    // Years ago
    if(days > 364 ) return `${days % 365}Years ago`

    // Days ago 
    else if( days > 30) return `${Math.floor(days/30)}Months ago`
    else if( days > 1 ) return `${days}days ago`
    // Days ago

    // Hours ago
    else if( days < 1 && Math.floor(date_gap / (60 * 60 * 1000)) > 1) {
        const hours = Math.floor(date_gap / (60 * 60 * 1000 ));
        return `${hours} hours ago`
    }
    else {
        const mins = Math.floor(date_gap / (60 * 1000));
        return `${mins} mins ago`
    }

    // Mins ago
    return new Date(str).toDateString();
})

app.use('/static/js', express.static(path.join(settings.serverRoot, 'static', 'js')));
app.use('/static/img', express.static(path.join(settings.serverRoot, 'static', 'img')));
app.use('/static/assets', express.static(path.join(settings.serverRoot, 'static', 'assets')));
app.use(router);

app.listen(settings.port, ()=>{
    console.log(`Server is running on ${settings.port} port`);
});
