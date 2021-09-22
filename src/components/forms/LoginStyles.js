import styled from 'styled-components';

export const Title = styled.h2`
  color: green;
  font-size: 48px;
`;

export const FieldInput = styled.input`
  align-content: center;
  margin: 2px;
  size: 150px;
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
`;


export const Span = styled.span`
  color: red;
  margin: 10px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: green;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:hover {
    background-color: #4CAF50; /* Green */
    color: white;
  }
`;