import NextLink from "next/link";
import {
  Button,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  ConditionalValue,
} from "@chakra-ui/react";

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
      <Button variant={variant ?? "link"}>{text}</Button>
    </ChakraLink>
  );
};

export default Link;
