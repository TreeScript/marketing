"use client"

import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;

const Card = styled.div`
    background: white;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #eee;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
`;

const CardTitle = styled.div`
    font-weight: 600;
    margin-bottom: 12px;
`;

const Number = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const List = styled.div`
    font-size: 14px;
    color: #555;
`;

export const AdminHomeStyle = {
    Wrapper,
    Title,
    CardGrid,
    Card,
    CardTitle,
    Number,
    List
}