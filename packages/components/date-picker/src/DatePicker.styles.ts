import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props): string => props.theme.palette.white};
  user-select: none;
  display: grid;
  grid-template-rows: 48px 290px 1fr;
  align-items: stretch;
  justify-content: stretch;
  min-width: 318px;
  padding-top: 12px;
  > *:not(:last-child) {
    border-bottom: 1px solid ${(props): string => props.theme.palette['grey-200']};
  }
`;

export const OverlayContainer = styled.div``;
