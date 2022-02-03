import "src/commons/styles/globals.css";
import "src/commons/styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Layout from "../commons/components/Layout";

import { Provider } from "react-redux";
import store from "src/redux/store";
import Header from "src/commons/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
