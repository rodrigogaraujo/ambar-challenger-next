import dynamic from "next/dynamic";

import "react-toastify/dist/ReactToastify.css";
import "../../node_modules/antd/dist/antd.css";
import { ToastContainer } from "react-toastify";

import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
