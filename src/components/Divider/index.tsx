import styled from 'styled-components';
import { BorderStyleProps, margin, MarginProps } from 'styled-system';

import { exceptionList } from '../../utils/styled/exceptionList';

interface AttributeProps {
  label?: string;
}
export interface DividerProps
  extends Omit<
      BorderStyleProps,
      | 'borderTopStyle'
      | 'borderBottomStyle'
      | 'borderLeftStyle'
      | 'borderRightStyle'
    >,
    MarginProps,
    AttributeProps {
  borderWidth?: number | string;
  color?: string;
}

export const Divider = styled.hr
  .attrs((props: AttributeProps) => ({ label: props.label }))
  .withConfig({
    shouldForwardProp: (prop, validator) =>
      !exceptionList.includes(prop) && validator(prop),
  })<DividerProps>`
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  border-top-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-top-style: ${({ borderStyle }) => borderStyle || 'solid'};
  border-top-color: ${({ theme, color }) => color || theme.colors['grey-400']};
  text-align: center;

  &[label] {
    &::after {
      content: attr(label);
      color: ${({ theme }) => theme.colors['grey-400']};
      background: #fff;
      display: inline-block;
      margin: 0 1rem;
      padding: 0 1.75rem;
      transform: translateY(-50%);
    }
  }

  ${margin};
`;
