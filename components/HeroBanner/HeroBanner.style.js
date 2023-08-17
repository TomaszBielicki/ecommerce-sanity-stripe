import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 150px;
  min-height: 480px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  position: absolute;
  top: 40px;
  z-index: -1;
`;

export const Image = styled.img`
  max-width: 100vw;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;
