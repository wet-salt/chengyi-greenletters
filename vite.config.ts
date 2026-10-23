import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath,URL} from "node:url";
export default defineConfig({base:"/chengyi-greenletters/",plugins:[react()],resolve:{alias:{"next/link":fileURLToPath(new URL("./lib/pages-link.tsx",import.meta.url)),"next/navigation":fileURLToPath(new URL("./lib/pages-router.ts",import.meta.url))}},build:{outDir:"docs",emptyOutDir:true}});
