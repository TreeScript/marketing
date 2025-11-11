"use client"

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{box-sizing:border-box} 
    html,body,#__next{height:100%}
    body{
        margin: 0;
        color: ${theme.color.text.primary};
        background: ${theme.color.surface.muted};
        font-family: ${theme.typography.font.base};
        font-size: ${theme.typography.size.lg};
        line-height: ${theme.typography.line.normal};
    }
    a{color:inherit; text-decoration:none}
    button{font:inherit}
`