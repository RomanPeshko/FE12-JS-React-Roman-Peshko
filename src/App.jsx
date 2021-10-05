import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import RootRouter from "./Routing/Root";
import MainLayouts from "./Layouts/MainLayouts";

const App = (props) => {
  return (
    <React.Fragment>
      <GlobalModalProvider>
        <BrowserRouter>
          <MainLayouts>
            <RootRouter />
          </MainLayouts>
        </BrowserRouter>
      </GlobalModalProvider>
    </React.Fragment>
  )
};

export default App;