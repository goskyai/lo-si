import { Icon } from '../Icon';
import { Collapse, CollapseProps } from 'antd';
import * as CSS from 'csstype';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface AccordionProps extends CollapseProps {
  borderStyle?: CSS.Property.BorderStyle;
  headerColor?: string;
  hideDividerBeforeExpanded?: boolean;
  hideLastDivider?: boolean;
}

/* eslint-disable indent */
const StyledAccordion = styled(Collapse)<AccordionProps>`
  &.ant-collapse {
    border: none;

    & > .ant-collapse-item {
      border: none;
      border-style: ${({ borderStyle }) => borderStyle};
      border-color: var(--grey-4);
      border-width: 0;
      ${({ bordered, hideDividerBeforeExpanded }) =>
        !bordered || hideDividerBeforeExpanded
          ? 'border-top-width: 0; padding: 0 0 1.75rem;'
          : 'border-top-width: 1px; padding: 1.75rem 0;'}

      &.ant-collapse-item-active + .ant-collapse-item-active {
        ${({ hideDividerBeforeExpanded }) =>
          hideDividerBeforeExpanded &&
          'border-top-width: 1px; padding: 1.75rem 0;'}
      }

      & > .ant-collapse-header {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        color: ${({ headerColor }) =>
          headerColor ? headerColor : 'var(--text-color)'};

        & > i {
          margin-left: 0.625rem;
        }
      }

      & > .ant-collapse-header,
      &.ant-collapse-no-arrow > .ant-collapse-header {
        padding-left: 0;
      }

      &:first-child {
        padding-top: 0;
        border-top: none;
      }

      &:last-child {
        ${({ bordered, hideLastDivider }) =>
          !bordered || hideLastDivider
            ? 'border-bottom-width: none; padding-bottom: 0;'
            : 'border-bottom-width: 1px; padding-bottom: 1.75rem;'}
      }

      & .ant-collapse-content {
        border: none;
      }
    }
  }
`;
/* eslint-enable indent */

const ExpandIcon: FunctionComponent<{ isActive: boolean }> = ({ isActive }) => {
  return <Icon icon="chevron-down" fontSize={12} rotate={isActive ? 0 : -90} />;
};

export const Accordion: FunctionComponent<AccordionProps> = (props) => {
  return (
    <StyledAccordion
      bordered={true}
      borderStyle="solid"
      expandIcon={({ isActive = false }) => <ExpandIcon isActive={isActive} />}
      hideDividerBeforeExpanded={false}
      {...props}
    />
  );
};
