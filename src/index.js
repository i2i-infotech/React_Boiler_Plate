import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { configureAppStore } from "./store";
import addAuthTokenInterceptor from "./api/addAuthTokenInterceptor";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./theme.css";
const configureStore = configureAppStore();

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {},
    },
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 600,
  //     sm: 960,
  //     md: 1280,
  //     lg: 1536,
  //     xl: 2560,
  //   },
  // },
});

addAuthTokenInterceptor(configureStore.store);
const AppWithStore = () => {
  return (
    <StoreProvider store={configureStore.store}>
      <PersistGate loading={<></>} persistor={configureStore.persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Router>
        <AppWithStore />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
