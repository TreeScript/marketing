"use client"
import styled, { css } from "styled-components"

type Variant = "solid" | "dashed" | "gradient" | "subtle"
type Orientation = "horizontal" | "vertical"
type Thickness = "xs" | "sm" | "md"

const thicknessMap: Record<Thickness, string> = {
    xs: "1px",
    sm: "2px",
    md: "3px"
} as const

const base = ($orientation: Orientation) =>
    $orientation === "horizontal"
        ? css`
            width: 100%;
            height: 0;
        `
        : css`
            width: 0;
            height: 100%;
        `

const solidStyle = ($orientation: Orientation = "horizontal", $thickness: Thickness = "sm") =>
    $orientation === "horizontal"
        ? css`
            border-top: ${(thicknessMap[$thickness])} solid #E5E7EB;
        `
        : css`
            border-left: ${(thicknessMap[$thickness])} solid #E5E7EB;
        `

const dashedStyle = ($orientation: Orientation) =>
    $orientation === "horizontal"
        ? css`
            border-top: 1px dashed #CBD5E1;
        `
        : css`
            border-left: 1px dashed #CBD5E1 ;
        `

const gradientStyle = ($orientation: Orientation) =>
    $orientation === "horizontal"
        ? css`
            height: 1px;
            background: linear-gradient(90deg, #e5e7eb00, #e5e7eb 20%, #e5e7eb 80%, #e5e7eb00);
        `
        : css`
            width: 1px;
            background: linear-gradient(180deg, #e5e7eb00, #e5e7eb 20%, #e5e7eb 80%, #e5e7eb00);
        `

const subtleStyle = ($orientation: Orientation) =>
    $orientation === "horizontal"
        ? css`
            height: 1px;
            background: #eef2f7;
        `
        : css`
            width: 1px;
            background: #eef2f7;
        `

export interface DividerProps {
    variant?: Variant
    $orientation?: Orientation
    $thickness?: Thickness
    m?: string
    mt?: string
    mb?: string
    ml?: string
    mr?: string
}


export const Divider = styled.div<DividerProps>`
    flex: none;
    ${({ $orientation = "horizontal" }) => base($orientation) }
    ${({ variant = "gradient", $orientation = "horizontal", $thickness = "xs" }) => {
        switch(variant) {
            case "solid":
                return solidStyle($orientation, $thickness)
            case "dashed":
                return dashedStyle($orientation)
            case "gradient":
                return gradientStyle($orientation)
            case "subtle":
                return subtleStyle($orientation)
            default:
                return subtleStyle($orientation)
        }
    }}

    ${({ m }) => m && css`
        margin: ${m};
    `}
    ${({ mt }) => mt && css`
        margin-top: ${mt};
    `}
    ${({ mb }) => mb && css`
        margin-bottom: ${mb};
    `}
    ${({ ml }) => ml && css`
        margin-left: ${ml};
    `}
    ${({ mr }) => mr && css`
        margin-right: ${mr};
    `}
`