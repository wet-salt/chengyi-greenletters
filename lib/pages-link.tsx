import type {AnchorHTMLAttributes,MouseEvent} from "react";
import {navigate,siteHref} from "./pages-router";
export default function Link({href="/",onClick,children,...props}:AnchorHTMLAttributes<HTMLAnchorElement>){
 function clicked(e:MouseEvent<HTMLAnchorElement>){onClick?.(e);if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||props.target==="_blank"||!href.startsWith("/")||href.startsWith("//"))return;e.preventDefault();navigate(href);}
 return <a {...props} href={siteHref(href)} onClick={clicked}>{children}</a>;
}
