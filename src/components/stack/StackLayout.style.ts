import { Stack, styled } from "@mui/material";
import BgAuth from '../../assets/images/BG.png'
export const StackStyled = styled(Stack)(()=>({
    
    backgroundImage: `url(${BgAuth})`,
    height:'100vh',
    width:'100%',
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover"

}))