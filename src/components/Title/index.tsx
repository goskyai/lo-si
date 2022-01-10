import { Typography, TypographyProps } from 'antd';
import { ComponentProps, FunctionComponent } from 'react';
import styled from 'styled-components';

const { Title: AntdTitle } = Typography;

export interface TitleInterface
  extends ComponentProps<TypographyProps['Title']> {
  strong?: boolean;
}

export type TitleType = FunctionComponent<TitleInterface>;

const StyledTitle = styled(AntdTitle)<TitleInterface>`
  &.ant-typography {
    line-height: 1.3;
    font-weight: ${({ strong }) => (strong ? 600 : 400)};
  }
`;

export const Title = StyledTitle;
