import styled from "styled-components";

export const Page = styled.div`
  background-color: #f4f4f4;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 20px;
  background-color: #3e403e;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  text-align: center;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const CardButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #3e403e;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4caf50;
  }
`;
