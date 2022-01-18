import { Tag as ATag } from 'antd';
import { CheckableTagProps } from 'antd/lib/tag';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getColorValue } from '../../utils/styled/color';
import { FontSize } from '../../utils/styled/fontSize';
import { Padding } from '../../utils/styled/padding';

export interface TagProps extends CheckableTagProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const StyledTag = styled(ATag.CheckableTag)<TagProps>`
  cursor: default;

  &.ant-tag {
    border-radius: 2rem;
    font-size: ${FontSize('h4')};
    padding: ${Padding(2, 5)};
    border: 0;
  }

  &.ant-tag-checkable:active {
    background-color: ${getColorValue('gosky-blue')};

    &:hover {
      color: ${getColorValue('grey-100')};
    }
  }

  &.ant-tag-checkable-checked {
    background-color: ${getColorValue('gosky-blue', '200')};
    color: ${getColorValue('gosky-blue')};
  }
`;

export const CheckableTag: FunctionComponent<TagProps> = ({ ...props }) => (
  <StyledTag {...props} />
);
