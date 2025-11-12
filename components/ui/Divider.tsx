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

type DivProps = { 
    $orientation: Orientation 
    $thickness: Thickness
}

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

const solidStyle = ({ $orientation = "horizontal", $thickness = "sm" }: DivProps) =>
    $orientation === "horizontal"
        ? css`
            border-top: ${(thicknessMap[$thickness])} solid #E5E7EB;
        `
        : css`
            border-left: ${(thicknessMap[$thickness])} solid #E5E7EB;
        `

const dashedStyle = ({ $orientation }: { $orientation: Orientation }) =>
    $orientation === "horizontal"
        ? css`
            border-top: 1px dashed #CBD5E1;
        `
        : css`
            border-left: 1px dashed #CBD5E1 ;
        `

const gradientStyle = ({ $orientation }: { $orientation: Orientation }) =>
    $orientation === "horizontal"
        ? css`
            height: 1px;
            background: linear-gradient(90deg, #e5e7eb00, #e5e7eb 20%, #e5e7eb 80%, #e5e7eb00);
        `
        : css`
            width: 1px;
            background: linear-gradient(180deg, #e5e7eb00, #e5e7eb 20%, #e5e7eb 80%, #e5e7eb00);
        `

const subtleStyle = ({ $orientation }: { $orientation: Orientation }) =>
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
        }
    }}
`