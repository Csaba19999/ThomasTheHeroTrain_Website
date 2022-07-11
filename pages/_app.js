import "../styles/globals.css";
import MainLayout from "../Layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
