import {
  Breadcrumb as ABreadcrumb,
  BreadcrumbInterface,
  BreadcrumbProps,
} from 'antd';
import styled from 'styled-components';
import { getColorValue } from '../../utils/styled/color';
import { Icon } from '../Icon';

export const Breadcrumb = styled<BreadcrumbInterface>(
  ABreadcrumb,
)<BreadcrumbProps>`
  .ant-breadcrumb-separator {
    display: inline-flex;
    color: ${getColorValue('grey', '300')};
    .anticon {
      font-size: 0.5rem;
    }
  }

  &.ant-breadcrumb {
    .ant-breadcrumb-link {
      color: ${getColorValue('grey', '500')} !important;

      &:hover {
        color: ${getColorValue('grey', '700')} !important;
      }

      * {
        color: inherit;
      }
    }

    > span:last-child {
      .ant-breadcrumb-link {
        color: ${getColorValue('gosky-blue')} !important;

        * {
          color: inherit;
        }
      }
    }
  }
`;

Breadcrumb.defaultProps = {
  separator: <Icon icon="chevron-right" />,
};
