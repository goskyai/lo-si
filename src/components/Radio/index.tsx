import { forwardRef, FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';
import { getColorValue } from '../../utils/styled/color';

const StyledRadio = styled.label<MarginProps>`
  ${margin}
  span {
    display: flex;
    align-items: center;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    background: ${getColorValue('gosky-blue-200')};
    border-radius: 50%;
    border: 1px solid ${getColorValue('gosky-blue')};
    cursor: pointer;

    &::after {
      width: 0.875rem;
      height: 0.875rem;
      border-radius: 50%;
      background: ${getColorValue('gosky-blue')};
      display: block;
      content: '';
      opacity: 0;
    }
  }

  input {
    display: none;
    &:checked {
      & ~ span {
        &::after {
          opacity: 1;
        }
      }
    }
    &:disabled {
      & ~ span {
        background-color: ${getColorValue('grey-400')};
        border-color: ${getColorValue('grey-500')};

        &::after {
          background-color: ${getColorValue('grey-500')};
        }
      }
    }
  }
`;

export interface RadioProps
  extends Omit<
      MarginProps,
      | 'marginBottom'
      | 'marginRight'
      | 'marginLeft'
      | 'marginTop'
      | 'marginX'
      | 'marginY'
      | 'margin'
      | 'm'
    >,
    InputHTMLAttributes<HTMLInputElement> {
  className?: '';
}

export const Radio: FunctionComponent<RadioProps> = forwardRef<
  HTMLInputElement,
  RadioProps
>(
  (
    {
      className = '',
      mx = 0,
      my = 0,
      mt = 0,
      ml = 0,
      mb = 0,
      mr = 0,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledRadio
        className={className}
        mx={mx}
        my={my}
        mt={mt}
        ml={ml}
        mb={mb}
        mr={mr}
      >
        <input type="radio" ref={ref} {...props} />
        <span />
      </StyledRadio>
    );
  },
);
