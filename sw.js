if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/arco-ByeVigdo.js",revision:null},{url:"assets/de-DE-DpgtVPK4.js",revision:null},{url:"assets/en-US-BA-k-UzM.js",revision:null},{url:"assets/es-ES-DagfzHdI.js",revision:null},{url:"assets/fr-FR-Cf2MPeh2.js",revision:null},{url:"assets/highlight-Bz-P3ZY4.js",revision:null},{url:"assets/hls-D-4dPmMX.js",revision:null},{url:"assets/index-CNnYdnc6.js",revision:null},{url:"assets/index-DWI4fWqi.css",revision:null},{url:"assets/plyr.min-BGGPbJFG.js",revision:null},{url:"assets/react-BoTu8Avb.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh-CN-CML837Il.js",revision:null},{url:"index.html",revision:"3ceba94cbe2c11944daf4d14e6457093"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"4eba275bbc2451d91c4887949722ca63"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
