import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #3e403e;
`;

export const DashboardTitle = styled.h1`
  font-size: 3em;
  color: #4caf50;
  margin-bottom: 20px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 900px;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 250px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  padding: 12px 25px;
  font-size: 1.1em;
  font-weight: 500;
  color: white;
  background-color: #3e403e;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }
`;
