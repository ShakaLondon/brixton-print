"use client";

import NextLink from "next/link";
import {
  Button,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  ConditionalValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import styles from "./navLink.module.css";

type NavLinkProps = ChakraLinkProps & {
  href: string;
  text: string;
  variant?: ConditionalValue<
    "outline" | "link" | "solid" | "active" | "ghost" | undefined
  >;
};

const NavLink = ({ href, text, variant, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      <Button variant={isActive ? "active" : "link"} paddingInline={4}>
        {text}
      </Button>
    </ChakraLink>
  );
};

export default NavLink;
