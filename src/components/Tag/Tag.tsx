import { Tag as ATag, TagProps as ATagProps } from 'antd';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MainColorType } from '../../assets/theme/global';
import { getColorValue } from '../../utils/styled/color';
import { FontSize } from '../../utils/styled/fontSize';
import { Padding } from '../../utils/styled/padding';
import { Icon } from '../Icon';

export interface TagProps extends ATagProps {
  prefixCls?: string;
  className?: string;
  color?: MainColorType | 'grey-500';
  closable?: boolean;
  closeIcon?: React.ReactNode;
  visible?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

/* eslint-disable */
const StyledTag = styled(ATag)<TagProps>`
  cursor: default;

  &.ant-tag {
    border-radius: 2rem;
    font-size: ${FontSize('h4')};
    padding: ${Padding(2, 5)};
    color: ${({ color }) => color && getColorValue(color)};
    background-color: ${({ color }) =>
      color && getColorValue(color === 'grey-500' ? 'grey' : color, '200')};
    border: 0;
    display: flex;
    align-items: center;
  }

  &.ant-tag-hidden {
    display: none;
  }

  .ant-tag-close-icon {
    color: ${getColorValue('grey-400')};
    margin-left: 0.375rem;

    .anticon {
      vertical-align: 0;
    }

    &:hover {
      color: ${getColorValue('grey-700')};
    }
  }
`;
/* eslint-enable */

export const Tag: FunctionComponent<TagProps> = ({ closeIcon, ...props }) => (
  <StyledTag
    closeIcon={
      closeIcon || <Icon style={{ fontSize: '0.5rem' }} icon="close" />
    }
    {...props}
  />
);
