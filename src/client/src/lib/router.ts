/**
 * @file Client Routing based on URL
 */

 import * as interfaces from './types';

 const routers: Router[] = [];
 
 export class RouterManager {
     routers = routers;
 
     constructor() {}
 
     public registerRouter(inputRouter: Router): void {
         this.routers.push(inputRouter);
 
         return;
     }
 
     public run(): void {
         for (const router of this.routers) {
             router.run();
         }
     }
 }
 
 export class Router {
     name: string = '';
     urls: interfaces.RouterUrl[] = [];
     handlers: { (): any }[] = [];
     handlers2: { (): any }[] = [];
     routers: Router[] = [];
 
     constructor(inputUrl: string | RegExp = '') {
         if (inputUrl) this.urls.push(inputUrl);
     }
 
     public registerHandler(
         fun: { (): any },
         event: 'onload' | 'before' = 'onload'
     ) {
         if (event == 'onload') {
             // onload
             this.handlers.push(fun);
         } else {
             this.handlers2.push(fun);
         }
     }
 
     public registerRouter(inputRouter: Router) {
         this.routers.push(inputRouter);
     }
 
     public run() {
         for (const url of this.urls) {
             if (checkString(url)) {
                 if (!(url === window.location.pathname)) continue;
             } else {
                 if (!(url as RegExp).test(window.location.pathname)) continue;
             }
 
             for (const handler of this.handlers) {
                 window.addEventListener('load', handler);
             }
 
             for (const handler of this.handlers2) {
                 window.addEventListener('DOMContentLoaded', handler);
             }
         }
 
         for (const childRouter of this.routers) {
             childRouter.run();
         }
     }
 }
 
 // Helper Function
 function checkString(p1: string | RegExp) {
     if (typeof p1 == 'string') return true;
     return false;
 }
 