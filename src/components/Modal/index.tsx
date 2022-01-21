import { FunctionComponent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { animated, Transition } from 'react-spring';
import styled from 'styled-components';
import {
  BorderRadiusProps,
  compose,
  maxWidth as maxWidthUtil,
  MaxWidthProps,
  padding,
  PaddingProps,
  space,
  SpaceProps,
  textAlign as textAlignUtil,
  TextAlignProps,
  width as widthUtil,
  WidthProps,
} from 'styled-system';
import { useKeyPress } from '../../hooks/keyPress/useKeyPress';
import { headshake } from '../../utils/animation';
import { color, ColorProps, getColorValue } from '../../utils/styled/color';
import { exceptionList } from '../../utils/styled/exceptionList';
import { Icon } from '../Icon';

export interface ModalProps
  extends TextAlignProps,
    MaxWidthProps,
    WidthProps,
    PaddingProps,
    ColorProps {
  /** 開啟或關閉 Modal */
  open: boolean;
  /**維持開啟狀態，無視 ESC 及點擊關閉 */
  persistent?: boolean;
  /** 用以關閉 Modal 的 callback function */
  onClose?: () => unknown;
  /** 淡入、淡出動畫時間 */
  animateDuration?: number;
  /** Modal 右上角是否有 X 按鈕，點擊會觸發 onClose() */
  hasCloseButton?: boolean;
}

const StyledBackdrop = styled(animated.div).withConfig<ColorProps & SpaceProps>(
  {
    shouldForwardProp: (prop, validator) =>
      !exceptionList.includes(prop) && validator(prop),
  },
)`
  ${compose(space, color)}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  z-index: 999;
`;

const StyledCenteredWrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div.withConfig<
  { shake: boolean } & ColorProps &
    BorderRadiusProps &
    TextAlignProps &
    WidthProps &
    MaxWidthProps &
    PaddingProps
>({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})`
  position: relative;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii[5]};
  border: 1px solid ${getColorValue('grey-400')};
  width: 100%;
  animation: ${({ shake }) => shake && headshake} 1s;
  ${compose(color, widthUtil, padding, maxWidthUtil, textAlignUtil)}
`;

const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  opacity: 0.4;
  cursor: pointer;
`;

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  open,
  onClose,
  textAlign = 'center',
  maxWidth,
  width,
  animateDuration = 300,
  persistent = false,
  hasCloseButton = false,
  ...containerProps
}) => {
  const esc = useKeyPress('Escape');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    /**
     * close modal if the modal is opend,
     * modal is not set to persist,
     * and Escape is pressed
     * */
    if (open && esc && !persistent && onClose) {
      onClose();
    }
  }, [esc, open]);

  const closeModal = () => {
    if (!persistent && onClose) {
      onClose();
    } else {
      setShake(true);
    }
  };

  return createPortal(
    <Transition
      items={open}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      reverse={open}
      delay={200}
      config={{
        duration: animateDuration,
      }}
    >
      {(styles, item) =>
        item && (
          <StyledBackdrop
            // https://github.com/pmndrs/react-spring/issues/1515
            // @ts-ignore
            padding="10"
            bg="backdrop"
            style={styles}
            onClick={closeModal}
          >
            <StyledCenteredWrapper>
              <StyledContainer
                bg="white"
                textAlign={textAlign}
                width={width || [1, 1, 1, 2 / 3, 1 / 2]}
                maxWidth={maxWidth}
                shake={shake}
                onAnimationEnd={() => setShake(false)}
                onClick={(e) => e.stopPropagation()}
                {...containerProps}
              >
                {hasCloseButton && (
                  <StyledCloseButtonWrapper onClick={onClose}>
                    <Icon
                      icon="times"
                      style={{
                        color: 'var(--grey-2)',
                        fontSize: '2.5rem',
                      }}
                    />
                  </StyledCloseButtonWrapper>
                )}
                {children}
              </StyledContainer>
            </StyledCenteredWrapper>
          </StyledBackdrop>
        )
      }
    </Transition>,
    document.getElementById('root') as Element,
  );
};
