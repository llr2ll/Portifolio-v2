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
import { styled } from '@mui/material/styles';
import { GiPaintBrush } from "react-icons/gi";
import { FcLinux } from "react-icons/fc";
import { MdHttp } from "react-icons/md";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export function Skills(){
    {/* <Grid container spacing={2}></Grid> */}
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Item>
                    
                </Item>
            </Grid>
            <Grid item xs={6}>
            <Item>2</Item>
            </Grid>
            <Grid item xs={6}>
            <Item>3</Item>
            </Grid>
            <Grid item xs={6}>
            <Item>4</Item>
            </Grid>
        </Grid>
    </Box>
}










/*
[[ Linguagens de Marcação / Markup Languages / Lenguajes de marcado ]]

    -HTML 5 	( Extremamente Avançado )           <FaHtml5 />
    -MarkDown 	( Avançado )                        <FaMarkdown />  

[[ Linguagens de estilização / Styling languages / Lenguajes de estilo ]]

    -Css 	( extremamente Avançado )               <FaCss3 />
    -Sass 	( avançado )                            <FaSass />
    -Scss	( avançado )                            <BsFiletypeScss />

[[ Linguagens de Programação / Programming languages / Lenguajes de programación ]]

    -Javascript 	( Extremamente Avançado )       <SiJavascript />
    -Php 	 	    ( intermediário )               <FaPhp />
    -C#		        ( intermediário )               <TbBrandCSharp />
    -Dart		    ( extremamente básico )         <SiDart />
    -Lua		    ( Básico )                      <SiLua />

[[ Linguagens de Transferencia de dados / Data Transfer Languages / Lenguajes de transferencia de datos ]]

    -Json 	( Extremamente Avançado )               <SiJson />
    -XML	( intermediário )                       <TbFileTypeXml />
    -YAML	( Básico )                              <SiYaml />

[[ Protocolos de comunicação / Communication protocols / Protocolos de comunicación ]]

    -HTTP 	( Extremamente Avançado )               <MdHttp />

[[ Ferramentas para teste de API / API Testing Tools / Herramientas de prueba API ]]

    -Postman 	( Avançado )                        <SiPostman />
    
    
    -Insominia 	( Avançado )
    -Thunder Client ( Avançado )


[[ Linguagens de banco de dados / Database languages / Lenguajes de bases de datos ]]

    -MySQL 		( Avançado )                        <SiMysql />
    -SQL SEVER 	( Bem Avançado )                    <SiMicrosoftsqlserver />
    -MongoDB	( Básico )                          <SiMongodb />

[[ Devops ]]

    -Azure devops ( intermediário )                 <SiMicrosoftazure />
    -Github ( Avançado )                            <FaGithub />

[[ Versionamento de código / Code versioning / Versionado de código ]]

    -Git ( Extremamente Avançado )                  <FaGitAlt />

[[ Bibliotecas de Php / Php FrameWorks / Bibliotecas de PHP ]]

    -Laravel        	( intermediário )           <FaLaravel />
    -Composer 		    ( Básico )                  <SiComposer />
    -Xamp			    ( Básico )                  <SiXampp />

[[ Bibliotecas de Javascript / Javascript FrameWorks / Bibliotecas de Javascript ]]

    -React*		( avançado )                        <FaReact />
    -Angular*	( avançado )                        <FaAngular />
    -Vue*		( intermediário )                   <FaVuejs />
    -Node*	 	( avançado )                        <FaNode />
    
    
    
    -Express*	    ( intermediário )
    
    
    -Redux		    ( intermediário )               <SiRedux />
    -Next*	 	    ( básico )                      <SiNextdotjs />
    -Jquery		    ( avançado )                    <SiJquery />
    -Chart JS	    ( básico )                      <SiChartdotjs />
    -Moment	JS	    ( básico )                      <BsClockHistory />
    -Three JS	    ( Bem Básico )                  <SiThreedotjs />
    -Electron	    ( Intermediário )               <SiElectron />
    -React router   ( avançado )                    <SiReactrouter />
    -Angular router ( avançado )                    <FaAngular />

[[ Pré compiladores de javascript / javascript pre compilers / Precompiladores de Javascript ]]

    -Babel 		    ( intermediário )               <SiBabel />
    -Typescript*	( Bem Avançado )                <SiTypescript />

    [[ Javascript Tools ]]

    -ESLint  	    ( intermediário )               <SiEslint /> 
    -Webpack	    ( intermediário )               <SiWebpack />
    -Vite		    ( intermediário )               <SiVite />

[[ Bibliotecas de Componentes Javscript /  Javascript Component FrameWorks / Bibliotecas de componentes Javascript ]]



    -Devextreme 	( Bem Avançado )
    -SyncFusion	    ( Bem Avançado )
    -Material UI	( Bem Avançado )



    -Bootstrap	    ( avançado )                    <FaBootstrap />

[[ Javscript Icons FrameWorks ]]

    -React Icons 		( Bem Avançado )
    
    -Font Awesome		( Bem Avançado )            <SiFontawesome />

    -Materia UI Icons 	( Bem Avançado )

[[ Sistemas Operacionais ]]

    -Linux 		( intermediário )                   <FcLinux />
    -Windows 	( Bem Avançado )                    <FaWindows />
    
[[ Distros de Linux ]]

    -Arch Linux 	( intermediário )               <SiArchlinux />
    -Ubuntu		    ( intermediário )               <FaUbuntu />
    -Kali Linux	    ( Básico )                      <SiKalilinux />

[[ Games Engines ]]

    -Unreal Engine 4 ( intermediário )              <SiUnrealengine />
    -Unity		     ( intermediário )              <FaUnity />

[[ Criação 3D ]]

    -Blender	( intermediário )                   <SiBlender />

[[ Criação de Sites ]]

    -Wix 			        ( Básico )              <FaWix />
    -Wordpress	            ( intermediário )       <FaWordpress />
    -Elementor          	( intermediário )       <SiElementor />
    -Hostgator 		        ( Básico )

[[ Editores de Imagem ]]

    -Photshop	( intermediário )                   <SiAdobephotoshop />
    -Canva		( intermediário )                   <SiCanva />
    -Paint.NET	( Avançado )                        <GiPaintBrush />
    -Krita		( Básico )                          <SiKrita />

[[ Editores de vídeo ]]


-Sony Vegas 	( intermediário )


    -Canva		( intermediário )                   <SiCanva />

[[ Captura de tela / Live ]]

    -OBS ( avançado )                               <SiObsstudio />
*/