import { List, ListItem, styled } from "@mui/material";
import React from "react";
import { useProduct } from "../../hooks";
import { Link, Text } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "8px 18px",
  borderRadius: "14px",
  margin: "0px",
  backgroundColor: "#FF9900",
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();
  return (
    <List sx={{ display: "flex" }}>
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <Link
            key={_id}
            to={`/products/categories/${name}?sort=price,desc&page=1`}>
            <StyledListItem>
              <Text fontWeight="600" color="white">
                {name}
              </Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
