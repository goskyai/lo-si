import { Typography, TypographyProps } from 'antd';
import styled from 'styled-components';

const { Text: AntdText } = Typography;

export type TextProps = Pick<TypographyProps, 'Text'>['Text'];

const StyledText = styled(AntdText)<TextProps>`
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fontFamily.default};
`;

export const Text = StyledText;
