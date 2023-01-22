import "./App.scss";
import Header from "~/Components/Header/Header";
// import Showcase from "~/Components/Showcase/Showcase";
// import Products from "~/Components/Products/Products";
// import Category from "~/Components/Category/Category";
// import News from "~/Components/News/News";
// import Follow from "~/Components/Follow/Follow";
import Footer from "~/Components/Footer/Footer";
// import { ThemeProvider } from "@mui/material";
// import theme from "~/style/Theme";
import { Provider } from "react-redux";
import store from "~/redux/store";
import { Route, Routes } from "react-router";
import ROUTER from "~/constants/router";
import About from "~/pages/About";
import Benefits from "./pages/Benefits";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Pay from "./pages/Pay";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route path={ROUTER.HOME}>
              <Route path={ROUTER.CATALOG} element={<Catalog />} />
              <Route index element={<Home />} />
              <Route path={ROUTER.PAY} element={<Pay />} />
              <Route path={ROUTER.ABOUT} element={<About />} />
              <Route path={ROUTER.BENEFITS} element={<Benefits />} />
              <Route path={ROUTER.DELIVERY} element={<Delivery />} />
              <Route path={ROUTER.CONTACTS} element={<Contacts />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Provider>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
