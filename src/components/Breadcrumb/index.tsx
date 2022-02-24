import { To } from 'history';
import { last, slice } from 'lodash-es';
import { FunctionComponent } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../Text';

const StyledLink = styled(RouterLink)<RouterLinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors['grey-600']};
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors['grey-500']};
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
  const links = slice(items, 0, items.length - 1) as LinkType[];
  const lastItem = last(items) as LastItemType;
  return (
    <Text fontSize="h2" fontWeight={500}>
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
