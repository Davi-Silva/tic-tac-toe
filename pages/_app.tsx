import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";

import { toggleTheme } from "../store/actions/app";
import { appSelector } from "../store/selectors";

import { wrapper } from "../store";

import themes from "styles/themes";

import GlobalStyles from "styles/global";

const WrappedApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { theme } = useSelector(appSelector);

  return (
    <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
