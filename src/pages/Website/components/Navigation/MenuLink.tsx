import React, { AnchorHTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isHttpLink ? "a" : HashLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} smooth />;
};

export default MenuLink;