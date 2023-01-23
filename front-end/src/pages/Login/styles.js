import styled from 'styled-components';

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100%;
`;

export const Content = styled.div`
max-width: 500px;
max-height: 300px;
margin: auto;
`;

export const Logotipo = styled.div`
    margin: 10px 0;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Title = styled.p``;

export const Input = styled.input`
    border: 1px solid;
`;

export const LoginBtn = styled.button`
    margin: 10px;
`;

export const RegisterBtn = styled.button`
    margin: 5px 10px;
`;

export const ErrorMessage = styled.p``;
