import React from "react"
import { Typography } from "@mui/material"
import { BoxSpaceAround } from "../../../components/Box/Box.style"
import { TranslationStyled } from "../../../components/HookForm/SelectTranslation"
import { useTranslation } from "react-i18next"

export const TextAuth = () =>{
    const {t} = useTranslation();
    return(
    <>
        <BoxSpaceAround>
        <Typography variant='h6' >{t('auth.tx_2')}</Typography>
        <Typography variant='h6' >{t('auth.tx_3')}</Typography>
        <Typography variant='h6' >{t('auth.tx_4')}</Typography>
        <TranslationStyled />
    
    
        </BoxSpaceAround>
        </>
    )
}