import {useEffect,useSyncExternalStore} from "react";
import {createRoot} from "react-dom/client";
import SitePage from "./app/site-page";
import SiteMusic from "./app/site-music";
import {subscribe,locationSnapshot,currentSection} from "./lib/pages-router";
import "./app/globals.css";
function App(){const path=useSyncExternalStore(subscribe,locationSnapshot);const section=currentSection(location.pathname);useEffect(()=>{document.title=({home:"首页",archive:"明星轨迹",together:"双向奔赴",community:"粉丝互动"}[section])+" · 绿意来信";},[section]);return <><SiteMusic/><SitePage key={path} section={section}/></>;}
createRoot(document.getElementById("root")!).render(<App/>);
