import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { padding, PaddingProps } from 'styled-system';

import { ColorType } from '../../assets/theme/global';
import { Button } from '../Button';
import { Modal, ModalProps } from '../Modal';
import { Text } from '../Text';

interface BodyStyleProps extends PaddingProps {}
export interface ConfirmProps extends ModalProps {
  title?: string;
  content?: string | ReactNode;
  onConfirm?: () => unknown;
  onCancel?: () => unknown;
  cancelLabel?: string;
  confirmLabel?: string;
  themeColor?: ColorType;
  hasCancel?: boolean;
  bodyStyle?: BodyStyleProps;
}

const StyledConfirmWrapper = styled.div<PaddingProps>`
  ${padding}
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2.5rem;
`;

export const Confirm: FunctionComponent<ConfirmProps> = ({
  title = '',
  content = '',
  onConfirm,
  children,
  cancelLabel = '',
  confirmLabel = '',
  themeColor = 'blue',
  hasCancel = true,
  bodyStyle,
  onCancel,
  ...modalProps
}) => {
  const { onClose } = modalProps;

  return (
    <Modal hasCloseButton maxWidth="30rem" {...modalProps}>
      <StyledConfirmWrapper px="40" py="20" {...bodyStyle}>
        {title && (
          <Text fontSize="h1" textColor={themeColor} fontWeight="600">
            {title}
          </Text>
        )}
        {content && (
          <Text fontSize="body" textColor="grey-600" mt="6">
            {content}
          </Text>
        )}
        {children}
        <StyledButtonsWrapper>
          {hasCancel && (
            <Button color={themeColor} outline onClick={onCancel || onClose}>
              {cancelLabel || 'Cancel'}
            </Button>
          )}
          <Button color={themeColor} onClick={onConfirm}>
            {confirmLabel || 'Confirm'}
          </Button>
        </StyledButtonsWrapper>
      </StyledConfirmWrapper>
    </Modal>
  );
};
