import { forwardRef, FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { getColorValue } from '../../utils/styled/color';

const StyledSwitch = styled.label`
  display: flex;
  align-items: center;
  margin: 0;
`;

const StyledCheckbox = styled.input`
  display: none;

  &:checked ~ .switch-track {
    background: ${getColorValue('gosky-blue')};

    &:after {
      left: 1.125rem;
    }
  }

  &:disabled + .switch-track {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTrack = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 1.25rem;
  width: 2.25rem;
  background: ${getColorValue('grey')};
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0;

  &:after {
    position: absolute;
    left: 0.125rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: white;
    content: '';
    transition: all 0.2s ease;
  }
`;

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: '';
}

export const Switch: FunctionComponent<SwitchProps> = forwardRef<
  HTMLInputElement,
  SwitchProps
>(({ className, ...props }, ref) => {
  return (
    <StyledSwitch title={props.title}>
      <StyledCheckbox
        className="switch-checkbox"
        type="checkbox"
        ref={ref}
        {...props}
      />
      <StyledTrack className={`switch-track ${className}`} />
    </StyledSwitch>
  );
});
