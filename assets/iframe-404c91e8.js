import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":E,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=f({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const w={"./src/components/AudioPlayer.stories.ts":async()=>o(()=>import("./AudioPlayer.stories-9160cc35.js"),["./AudioPlayer.stories-9160cc35.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js"],import.meta.url)};async function d(_){return w[_]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([o(()=>import("./config-cbc32c83.js"),["./config-cbc32c83.js","./index-d475d2ea.js","./index-61bf1805.js","./_commonjsHelpers-de833af9.js","./_getPrototype-74a4a53f.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-986d8de3.js"),[],import.meta.url),o(()=>import("./preview-a60aa466.js"),[],import.meta.url),o(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),o(()=>import("./preview-1e5c59db.js"),[],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:S});export{o as _};
//# sourceMappingURL=iframe-404c91e8.js.map
