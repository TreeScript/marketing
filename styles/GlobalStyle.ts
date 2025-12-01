"use client"

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{ box-sizing:border-box } 
    html,body,#__next{ height:100% }
    body{
        margin: 0;
        color: ${theme.color.text.primary};
        background: 
            radial-gradient(12px 12px at 20% 10%,rgba(99, 102, 241, .06) 0%, transparent 60%),
            radial-gradient(12px 12px at 80% 20%,rgba(59, 130, 246, .06) 0%, transparent 60%),
            linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%);
        font-family: ${theme.typography.font.base};
        font-size: ${theme.typography.size.lg};
        line-height: ${theme.typography.line.normal};
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
    }
    a{ color:inherit; text-decoration:none }
    button{font:inherit}
`