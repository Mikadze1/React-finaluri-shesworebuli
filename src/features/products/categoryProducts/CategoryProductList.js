import React, { useEffect } from "react";
import { LoadingWrapper } from "../../../components/atoms";
import { Stack } from "@mui/material";
import { Sort } from "./Sort";
import { Paginate } from "./Paginate";
import { GridContainer } from "../components";
import { useProduct, useQueryParams } from "../../../hooks";
import { ProductCard } from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoryProduct } from "../../../redux";

export const CategoryProductList = () => {
  const { loading, categoryProducts, totalPages } = useProduct();
  const { category } = useParams();
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategoryProduct({
        category,
        queryUrl: `?size=2&sort=${sort}&page=${page}`,
      })
    );
  }, [sort, dispatch, page, category]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack alignItems="center" justifyContent="space-between" height="100%">
        <Sort value={sort} changeSort={changeSort} />

        <GridContainer>
          {categoryProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>

        <Paginate
          totalPages={totalPages}
          currentPage={page}
          changePage={changePage}
        />
      </Stack>
    </LoadingWrapper>
  );
};
