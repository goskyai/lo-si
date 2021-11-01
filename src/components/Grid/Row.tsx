import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  alignContent,
  AlignContentProps,
  alignItems,
  AlignItemsProps,
  compose,
  flexDirection,
  FlexDirectionProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
  margin,
  MarginProps,
} from 'styled-system';

import { baseSizePx } from '../../assets/theme/global';

interface FlexboxProps
  extends AlignContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps {}

interface StyledRowProps extends FlexboxProps, MarginProps {
  childMarginT?: string;
  childPaddingX?: string;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  ${compose(
    alignContent,
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    margin,
  )}

  & > * {
    flex-shrink: 0;
    /* width: 100%; */
    max-width: 100%;
    margin-top: ${({ childMarginT }) => childMarginT};
    padding-right: ${({ childPaddingX }) => childPaddingX};
    padding-left: ${({ childPaddingX }) => childPaddingX};
  }
`;

export interface RowProps extends FlexboxProps {
  /** Row 垂直間距，數值與 global theme 相同，`1` = `2px` */
  gutterX?: number;
  /** Column 水平間距，數值與 global theme 相同，`1` = `2px` */
  gutterY?: number;
}

export const Row: FunctionComponent<RowProps> = ({
  gutterX = 12,
  gutterY = 0,
  children,
  ...props
}) => {
  const mt = `${(gutterY * -2) / baseSizePx}rem`;
  const mx = `${(gutterX * -1) / baseSizePx}rem`;
  const childMarginT = `${(gutterY * 2) / baseSizePx}rem`;
  const childPaddingX = `${gutterX / baseSizePx}rem`;

  return (
    <StyledRow
      mt={mt}
      mx={mx}
      childMarginT={childMarginT}
      childPaddingX={childPaddingX}
      {...props}
    >
      {children}
    </StyledRow>
  );
};
