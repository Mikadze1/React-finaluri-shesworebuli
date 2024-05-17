import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/atoms";
import { Button } from "../../../components/atoms/Button.js";
import { Box, Stack, styled } from "@mui/material";

import { addToCart, removeFromCart } from "../../../redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Stars from "../../../components/UI/Stars/Stars.js";

import styles from "./SingleProduct.module.css";

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",
  borderRadius: 10,
}));

const Description = styled(Box)(() => ({
  display: "flex",
  alignItem: "center",
  marginBottom: "15px",
}));

export const SingleProduct = () => {
  const { t } = useTranslation();
  const { getData, data, loading } = useFetchData();
  const { id, category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getData(`/products/category/${category}/${id}`);
  }, [getData, id, category]);

  const _product = data?.product || {};
  const { image, name, brand, description } = _product;

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack direction="row" justifyContent="center" gap="10vw" flexWrap="wrap">
        <img
          className={styles.img}
          style={{ width: "max(38vw, 25rem)", overflow: "hidden" }}
          src={image}
          alt={`${name}-${brand}`}
        />
        <div className={styles.detailsContainer}>
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 4.5rem)" }}>{name}</h1>
          <h1
            style={{
              fontSize: "clamp(1rem, 2vw, 3rem)",
              color: "rgb(80, 80, 80)",
            }}>
            {brand}
          </h1>
          <p
            style={{
              fontSize: "clamp(0.8rem, 1.2vw, 1.2rem)",
              color: "rgb(100, 100, 100)",
              maxWidth: "25rem",
            }}>
            {description}
          </p>
          <Stars count={4} />
          <div className={styles.buttonContainer}>
            <button className={styles.buyButton}>{t("Buy Now")}</button>
            <button
              onClick={() => {
                dispatch(addToCart({ ..._product, _id: id }));
              }}
              className={styles.cartButton}>
              {t("Add To Cart")}
            </button>
          </div>
        </div>
      </Stack>
    </LoadingWrapper>
  );
};
