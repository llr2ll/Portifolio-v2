import { ReactElement } from "react";
import {
  FaReact, FaAngular, FaVuejs, FaHtml5, FaCss3, FaSass, FaNodeJs, FaPhp, FaLaravel,
  FaGitAlt, FaGithub, FaBootstrap, FaLinux,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiRedux, SiMysql, SiMicrosoftsqlserver, SiMongodb,
  SiMicrosoftazure, SiVite, SiWebpack, SiElectron, SiPostman, SiFigma, SiAdobephotoshop,
  SiBlender, SiUnity, SiUnrealengine, SiMui,
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";

export const skillIcons: Record<string, ReactElement> = {
  "React": <FaReact />, "Angular": <FaAngular />, "Vue": <FaVuejs />, "TypeScript": <SiTypescript />,
  "JavaScript": <SiJavascript />, "HTML5": <FaHtml5 />, "CSS3": <FaCss3 />, "Sass": <FaSass />,
  "Next.js": <SiNextdotjs />, "Redux": <SiRedux />, "Material UI": <SiMui />, "Bootstrap": <FaBootstrap />,
  "Node.js": <FaNodeJs />, "PHP": <FaPhp />, "Laravel": <FaLaravel />, "C#": <TbBrandCSharp />,
  "REST / HTTP": <TbApi />, "MySQL": <SiMysql />, "SQL Server": <SiMicrosoftsqlserver />, "MongoDB": <SiMongodb />,
  "Git": <FaGitAlt />, "GitHub": <FaGithub />, "Azure DevOps": <SiMicrosoftazure />, "Vite": <SiVite />,
  "Webpack": <SiWebpack />, "Electron": <SiElectron />, "Postman": <SiPostman />, "Linux": <FaLinux />,
  "Figma": <SiFigma />, "Photoshop": <SiAdobephotoshop />, "Blender": <SiBlender />, "Unity": <SiUnity />,
  "Unreal Engine": <SiUnrealengine />,
};
