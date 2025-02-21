"use client";

import NextLink from "next/link";
import {
  Button,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

type NavLinkProps = ChakraLinkProps & {
  href: string;
  text: string;
};

const NavLink = ({ href, text, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      <Button variant={isActive ? "active" : "link"}>{text}</Button>
    </ChakraLink>
  );
};

export default NavLink;
