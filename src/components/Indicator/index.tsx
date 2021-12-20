import * as CSS from 'csstype';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  BackgroundColorProps,
  borderColor,
  BorderColorProps,
  color as colorUtil,
  compose,
  height,
  HeightProps,
  ResponsiveValue,
  Theme,
  TLengthStyledSystem,
  variant,
  width,
  WidthProps,
} from 'styled-system';

import spinner from '../../assets/images/misc/spinner.svg';

export type Variants = 'success' | 'failed' | 'loading';
export interface IndicatorProps {
  /**
   * 指示燈的文字說明
   */
  title: string;
  /**
   * 指示燈大小，可用 RWD 陣列寫法，預設 1rem
   */
  size?: ResponsiveValue<
    CSS.Property.Height<TLengthStyledSystem>,
    Required<Theme<TLengthStyledSystem>>
  >;
  /**
   * 指示燈顏色，可用 RWD 陣列寫法，預設灰色
   */
  color?: ResponsiveValue<
    string | number | symbol,
    Required<Theme<TLengthStyledSystem>>
  >;
  status?: Variants;
}

interface SpanInterface
  extends HeightProps,
    WidthProps,
    BorderColorProps,
    BackgroundColorProps {
  variant?: Variants;
}

const StyledBorder = styled.span<SpanInterface>`
  ${compose(borderColor, height, width)}
  border-width: 1px;
  border-radius: 50%;
  border-style: solid;
  position: relative;
  display: inline-block;

  * {
    height: 137.5%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${variant({
    variants: {
      success: {
        borderColor: 'green',
        color: 'green',
      },
      failed: {
        borderColor: 'red',
        color: 'red',
      },
      loading: {
        borderColor: 'transparent',
      },
    },
  })}
`;

const StyledDot = styled.span<SpanInterface>`
  ${colorUtil}
  border-radius: 50%;
  height: calc(100% - 0.25rem);
  width: calc(100% - 0.25rem);

  ${variant({
    variants: {
      success: {
        backgroundColor: 'green',
      },
      failed: {
        backgroundColor: 'red',
      },
      loading: {
        backgroundColor: 'transparent',
      },
    },
  })}
`;

export const Indicator: FunctionComponent<IndicatorProps> = ({
  size = '1rem',
  title,
  color = 'grey',
  status,
}) => {
  return (
    <StyledBorder
      borderColor={color}
      title={title}
      height={size}
      width={size}
      variant={status}
    >
      {status === 'loading' ? (
        <img src={spinner} alt={title} />
      ) : (
        <StyledDot bg={color} variant={status} />
      )}
    </StyledBorder>
  );
};
