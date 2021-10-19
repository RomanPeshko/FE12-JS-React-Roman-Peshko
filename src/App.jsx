import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import RootRouter from "./Routing/Root";
import MainLayouts from "./Layouts/MainLayouts";
import GlobalStoreProvider from "HOC/GlobalStoreProvider";

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStoreProvider>
          <GlobalModalProvider>
            <MainLayouts>
              <RootRouter />
            </MainLayouts>
          </GlobalModalProvider>
        </GlobalStoreProvider>
      </BrowserRouter>
    </React.Fragment>
  )
};

export default App;