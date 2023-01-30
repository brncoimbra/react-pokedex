import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import AppRouter from "./routes";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
