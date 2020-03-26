import React, { FC } from 'react';
import styled from 'styled-components';
import { useIntl } from 'lib/hooks/i18n';

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const NotFound: FC = () => {
  const intl = useIntl();
  return <Wrapper>{intl({ id: 'sentence.404' })}</Wrapper>;
};

export default NotFound;
