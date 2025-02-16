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

const Link = ({ href, text, variant, children, ...props }: NavLinkProps) => {
  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      <Button variant={variant ?? "link"} marginInline={4} paddingInline={4}>
        {text}
      </Button>
    </ChakraLink>
  );
};

export default Link;
