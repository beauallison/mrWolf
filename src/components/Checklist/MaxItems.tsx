import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 300px;
`;

const ClearButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 120px;
  height: 30px;

  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 12px;
`;

const ClearText = styled.p`
  font-family: 'Inter';
  font-size: 13px;

  color: ${(props) => props.theme.colors.onBackground};
`;

export interface IProps {
  clearCompletedItems: void;
}

export default (props: IProps) => (
  <Container>
    <ClearText>{'Max checklist items reached'}</ClearText>
    <ClearButton onClick={props.clearCompletedItems}>Clear Completed</ClearButton>
  </Container>
);
