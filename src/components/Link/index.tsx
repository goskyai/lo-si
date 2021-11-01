import _ from 'lodash';
import { AnchorHTMLAttributes, FunctionComponent } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  compose,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { color, ColorProps } from '../../utils/styled/color';

interface LinkStyleProps {
  disabled?: boolean;
}
interface AnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ColorProps,
    LinkStyleProps {}
export interface LinkProps extends AnchorProps, RouterLinkProps {}

const LinkStyle = css<LinkStyleProps>`
  display: inline;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors['grey-500']};
  line-height: 1.4;
  margin: 0;
  border-bottom: 1px solid;
  cursor: pointer;
  ${({ disabled }) => disabled && 'pointer-events: none; opacity: 0.7;'};
  ${compose(position, space, typography, color)}
`;
const StyledAnchor = styled.a<AnchorProps>`
  ${LinkStyle}
`;
const StyledRouterLink = styled(RouterLink)<LinkProps>`
  ${LinkStyle}
`;

export const Link: FunctionComponent<LinkProps> = ({ to, ...props }) => {
  const href = _.get(to, 'pathname', to);
  const externalRegex = new RegExp('^http*|^#$');
  const isExternal = externalRegex.test(href);

  return isExternal ? (
    <StyledAnchor href={href === '#' ? void 0 : href} {...props} />
  ) : (
    <StyledRouterLink to={to} {...props} />
  );
};
