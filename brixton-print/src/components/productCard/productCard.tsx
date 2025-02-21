import { Button, Card, CardTitle, Image, Text } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/react/anatomy";

const ProductCard = () => {
  return (
    <Card.Root
      width="14rem"
      overflow="hidden"
      variant="product"
      size="sm"
      height="25rem"
    >
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        height="60%"
      />
      <Card.Body gap="1">
        <Card.Title>A4 Print</Card.Title>
        <Card.Description>
          Standard document print, in colour or black and white
        </Card.Description>
        <Text visual="one" size="bold" px="0" textAlign="end">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2" justifyContent="space-between" alignContent="center">
        <Text
          visual="one"
          size="bold"
          color="brand.yellow"
          px="0"
          textAlign="end"
        >
          SALE
        </Text>
        <Button visual="ghost">Customize</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
