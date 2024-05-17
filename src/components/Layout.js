import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import styles from "./Layout.module.css";
import toTop from "../assets/images/up-arrow.png";
import { Footer } from "./footer/Footer.js";

export const Layout = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const backToTop = () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", backToTop);

    return () => {
      window.removeEventListener("scroll", backToTop);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100%",
          width: "100%",
          pb: 10,
          backgroundColor: "#f5f5f5",
        }}>
        <Outlet />
      </Grid>
      {showButton && (
        <div className={styles.scrollToTop}>
          <button onClick={handleScrollToTop}>
            <img className={styles.toTop} src={toTop} alt="ScrollToTop" />
          </button>
        </div>
      )}
      <Footer />
    </Grid>
  );
};
