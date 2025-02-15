import NextLink from "next/link";
import {
  Button,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FC } from "react";

import styles from "./navLink.module.css";

type NavLinkProps = ChakraLinkProps & {
  href: string;
  text: string;
  variant?: string;
};

const Link: FC<NavLinkProps> = ({
  href,
  text,
  variant,
  children,
  ...props
}) => {
  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      <Button variant={variant ?? "link"} px={4}>
        {text}
      </Button>
    </ChakraLink>
  );
};

export default Link;
