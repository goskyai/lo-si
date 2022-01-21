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
    display: inline-flex;
    align-items: center;
    font-size: ${FontSize('h4')};
    line-height: 1.3;
    margin-right: 0.5rem;
    padding: ${Padding(2, 5)};
    border: 0;
    border-radius: 2rem;
    color: ${({ color }) => color && getColorValue(color)};
    background-color: ${({ color }) =>
      color && getColorValue(color === 'grey-500' ? 'grey' : color, '200')};
  }

  &.ant-tag-hidden {
    display: none;
  }

  .ant-tag-close-icon {
    color: ${getColorValue('grey-400')};
    margin-left: 0.375rem;

    .anticon {
      display: block;
      width: 0.5rem;
      height: 0.5rem;
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
      closeIcon || (
        <Icon
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
          }}
          icon="times"
        />
      )
    }
    {...props}
  />
);
