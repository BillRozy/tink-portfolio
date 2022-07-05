/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useResolvedPath, useMatch } from 'react-router-dom';
import { NavLink as UINavLink } from 'react-bootstrap';
import { NavLink, NavLinkProps } from 'react-router-dom';

const CustomNavLink = ({
  children,
  to,
  end = false,
  ...props
}: NavLinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end });

  return (
    <UINavLink
      as="div"
      active={match != null}
      css={{
        a: {
          textDecoration: 'none',
          '&.active': {
            textDecoration: 'underline',
          },
        },
      }}
    >
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </UINavLink>
  );
};

export default CustomNavLink;
