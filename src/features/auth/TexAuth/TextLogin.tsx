import React from "react"
import { Typography} from "@mui/material"
import { BoxCenter } from "../../../components/Box/Box.style"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
export const TextLogin = () =>{
    
    const { t }= useTranslation();

    return(
    <>
    <BoxCenter display={'flex'} marginBottom={ '3rem'}>
        <Typography variant='h6' >{t('auth.txt_1')}</Typography><Link to={'/'}> {t('auth.link_1')} </Link>
    </BoxCenter>
        </>
    )
}