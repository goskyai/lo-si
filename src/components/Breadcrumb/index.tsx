import { To } from 'history';
import _ from 'lodash';
import { FunctionComponent } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styled from 'styled-components';
import { getColorValue } from '../../utils/styled/color';
import { Text } from '../Text';

const StyledLink = styled(RouterLink)<RouterLinkProps>`
  text-decoration: none;
  color: ${getColorValue('grey')};
  transition: color 0.2s ease;
  &:hover {
    color: ${getColorValue('grey-500')};
  }
`;

type LinkType = {
  to: To;
  label: string;
};
type LastItemType = {
  label: string;
};
export type BreadcrumbItemsType = [...LinkType[], LastItemType];
export interface BreadcrumbProps {
  items: BreadcrumbItemsType;
}

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ items }) => {
  const links = _.slice(items, 0, items.length - 1) as LinkType[];
  const lastItem = _.last(items) as LastItemType;
  return (
    <Text>
      {links.map((link, index) => (
        <span key={index}>
          <StyledLink to={link.to}>{link.label}</StyledLink>
          {' > '}
        </span>
      ))}
      {lastItem.label}
    </Text>
  );
};
