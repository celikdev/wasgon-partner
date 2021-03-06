import React from "react";

import { BusinessProducts, LeftBar } from "../../components/Dashboard";

import { Header } from "../../components/main";

import { Box, Container } from "../../components/main/UI";

const Products = () => {
  return (
    <>
      <Header />
      <Container>
        <Box className="w-11/12">
          <div className="w-full px-16 flex">
            <LeftBar />
            <BusinessProducts />
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Products;
