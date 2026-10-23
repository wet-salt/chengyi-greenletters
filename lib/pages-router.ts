export const basePath="/chengyi-greenletters/";
export function siteHref(href:string){if(!href.startsWith("/")||href.startsWith("//")||href.startsWith(basePath))return href;const url=new URL(href,"https://example.test");return basePath+url.pathname.replace(/^\/+|\/+$/g,"")+(url.pathname!=="/"?"/":"")+url.search+url.hash;}
export function navigate(href:string){const target=siteHref(href);history.pushState(null,"",target);window.dispatchEvent(new PopStateEvent("popstate"));window.scrollTo({top:0,behavior:"instant"});}
export function useRouter(){return {push:navigate};}
export const subscribe=(listener:()=>void)=>{addEventListener("popstate",listener);return()=>removeEventListener("popstate",listener);};
export const locationSnapshot=()=>location.pathname+location.search;
export function currentSection(pathname:string){const id=pathname.slice(basePath.length).split("/")[0];return id==="archive"||id==="together"||id==="community"?id:"home";}
