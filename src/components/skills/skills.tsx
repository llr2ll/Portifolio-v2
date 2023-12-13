import { IFramework, ISkill } from '../../types';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SkillsJson } from "./skill";
import Box from '@mui/material/Box';

export function Skills(){
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <section style={{ padding: "5%" }}>
        {SkillsJson.map((categories: ISkill, index: number) =>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {categories.Data.map((framework: IFramework, index) => 
                    <Item key={index} style={{fontSize: "4rem"}}>
                        {framework.icon}
                        <Item>{framework.name}</Item>
                    </Item>
                )}
            </Grid>
        )}
    </section>
}