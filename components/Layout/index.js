import React from "react";

import NavBar from "../NavBar";
import Banner from "../Banner";
import Main from "../Main";
import ResourcesLinks from "../ResourcesLinks";
import Footer from "../Footer";

import { Grid } from "./styles";

const Layout = () => {
  return (
    <Grid>
      <NavBar />
      <Banner />
      <Main />
      <ResourcesLinks />
      <Footer />
    </Grid>
  );
};

export default Layout;
