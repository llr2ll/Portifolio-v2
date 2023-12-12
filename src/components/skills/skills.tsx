import { 
    SiJson, 
    SiYaml, 
    SiJavascript, 
    SiDart, 
    SiLua, 
    SiPostman, 
    SiMysql, 
    SiMicrosoftsqlserver, 
    SiMongodb, 
    SiMicrosoftazure, 
    SiComposer, 
    SiXampp, 
    SiRedux, 
    SiNextdotjs,
    SiJquery,
    SiChartdotjs,
    SiThreedotjs,
    SiElectron,
    SiReactrouter,
    SiBabel,
    SiTypescript,
    SiEslint,
    SiWebpack,
    SiVite,
    SiFontawesome,
    SiArchlinux,
    SiKalilinux,
    SiUnrealengine,
    SiBlender,
    SiElementor,
    SiAdobephotoshop,
    SiCanva,
    SiKrita,
    SiObsstudio
} from "react-icons/si";

import { 
    FaSass, 
    FaMarkdown, 
    FaCss3, 
    FaHtml5, 
    FaPhp, 
    FaGithub, 
    FaGitAlt, 
    FaLaravel, 
    FaReact, 
    FaAngular, 
    FaVuejs, 
    FaNode, 
    FaBootstrap, 
    FaUbuntu, 
    FaWindows,
    FaUnity,
    FaWix,
    FaWordpress,
} from "react-icons/fa";

import { BsFiletypeScss, BsClockHistory } from "react-icons/bs";
import { TbFileTypeXml, TbBrandCSharp } from "react-icons/tb";
import { ISkill, IFramework } from "../../types";
import { styled } from '@mui/material/styles';
import { GiPaintBrush } from "react-icons/gi";
import { FcLinux } from "react-icons/fc";
import { MdHttp } from "react-icons/md";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SkillsJson from "./skill.json";
import Box from '@mui/material/Box';
import React from "react";

export function Skills(){
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <section>
        {SkillsJson.map((categories, index: number) => <>
            {categories.Title[0]} 
            <Box sx={{ width: '100%', padding: "5%" }} key={index}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {categories.Data.map((framework: any, index) => {
                        const IconComponent = React.createElement(eval(framework.icone));

                        return <Item key={index}>
                            {IconComponent}
                            <Item>{framework.nome}</Item>
                        </Item>
                    })}
                </Grid>
            </Box>
        </>)} 
    </section>
}