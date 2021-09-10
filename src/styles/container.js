import styled from "styled-components";

export const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
`;

export const Block = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-wrap: wrap;
  font-size: 0.8rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.2);
  & footer {
    color: #e0e0e0;
  }
`;

export const Box = styled.div`
  margin-right: 20px;
  & p {
    font-weight: 500;
  }
`;

export const BlockWithouFlex = styled.div`
  margin-bottom: 40px;
  font-size: 0.8rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 1px 1px 5px -2px rgba(0, 0, 0, 0.2);
`;
