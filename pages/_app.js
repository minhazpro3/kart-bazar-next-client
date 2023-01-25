import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
