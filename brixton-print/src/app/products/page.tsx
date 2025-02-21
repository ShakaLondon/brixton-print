import Header from "@/components/header/header";
import ProductCard from "@/components/productCard/productCard";
import ProductStack from "@/components/productStack/productStack";
import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProductProps {
  children: ReactNode;
}

const ProductPage = ({ children }: ProductProps) => {
  return (
    <Container display="flex" justifyContent="center" pt={4}>
      <ProductStack />
    </Container>
  );
};

export default ProductPage;
