"use client";
import MusicPlayer from "./music-player";

// The root layout stays mounted during page navigation, keeping audio alive.
export default function SiteMusic(){
  return <MusicPlayer onOpen={()=>window.dispatchEvent(new Event("greenletters:pause-auto"))}/>;
}
