import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border: 1px solid black;
  width: 80vw;
  border-radius: 10px;
  padding: 10px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
