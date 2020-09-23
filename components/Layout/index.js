import React from "react";

import NavBar from "../NavBar";
import Banner from "../Banner";
import Main from "../Main"

import { Grid } from "./styles";

const Layout = () => {
  return (
    <Grid>
      <NavBar />
      <Banner />
      <Main/>
    </Grid>
  );
};

export default Layout;
