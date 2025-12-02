"use client"

import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
`;

const Input = styled.input`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
`;

const Select = styled.select`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
`;

const CreateButton = styled.button`
    margin-top: 20px;
    padding: 12px;
    border-radius: 8px;
    background: #0066ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

export const ProblemCreateStyle = {
    Wrapper,
    Title,
    Form,
    Label,
    Input,
    Select,
    TextArea,
    CreateButton
}