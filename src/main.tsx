import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import AppRouter from "./routes";
import { ResetCss } from "./theme/globalStyles";
import { dark } from "./theme";
import { Header } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={dark()}>
        <ResetCss />
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
