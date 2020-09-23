import React from "react";

import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles"


function HomePage() {
  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=0" />;
      <meta name="theme-color" content="#000000" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
      />
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default HomePage;
