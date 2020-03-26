import styled from 'styled-components';
import { SIDEBAR_WIDTH, TOPBAR_HEIGHT } from 'constances/layout';

export const ShiftContent = styled.div<{ shift: boolean }>`
  padding-left: ${props => {
    return props.shift ? `${SIDEBAR_WIDTH}px` : 0;
  }};
  padding-top: ${TOPBAR_HEIGHT}px;
`;
