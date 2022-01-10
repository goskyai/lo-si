import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { padding, PaddingProps } from 'styled-system';
import { ColorType } from '../../assets/theme/global';
import { Button } from '../Button';
import { Modal, ModalProps } from '../Modal';
import { Text } from '../Text';
import { Title } from '../Title';

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
          <Title
            level={2}
            strong
            style={{ color: 'var(--blue-base)', marginBottom: '0.5rem' }}
          >
            {title}
          </Title>
        )}
        {content && <Text>{content}</Text>}
        {children}
        <StyledButtonsWrapper>
          {hasCancel && (
            <Button
              color={themeColor}
              variant="secondary"
              onClick={onCancel || onClose}
            >
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
