import styled from 'styled-components';
import { Tabs as ATabs } from 'antd';

export const Tabs = styled(ATabs)`
  .ant-tabs-nav {
    &::before {
      display: none;
    }
  }
  .ant-tabs-tab-btn {
    font-weight: 500;
  }
  .ant-tabs-tab {
    border-left: 1px solid var(--grey-4);

    &:nth-last-of-type(2) {
      border-right: 1px solid var(--grey-4);
    }
  }
`;
