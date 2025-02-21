import { For, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductCard from "../productCard/productCard";

const ProductStack = () => {
  return (
    <SimpleGrid
      gap={6}
      //   px={4}
      //   direction="row"
      //   wrap="wrap"
      //   py={4}
      //   display="inline-flex"
      columns={{ base: 1, sm: 2, md: 2, lg: 4 }}
    >
      <For each={["1", "2", "3", "4", "5", "6", "7"]}>
        {(number) => <ProductCard key={number} />}
      </For>
    </SimpleGrid>
  );
};

export default ProductStack;
