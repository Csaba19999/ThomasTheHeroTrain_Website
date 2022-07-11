import { Fragment } from "react";
import Footer from "../Components/footer/Footer";
import MainNav from "../Components/nav/MainNav";
import classes from "./MainLayout.module.css";

function MainLayout(props) {
  return (
    <Fragment>
      <main className={classes.mainBox}>
        <MainNav />
        <div className={classes.mainDetail}>{props.children}</div>
        <Footer />
      </main>
    </Fragment>
  );
}

export default MainLayout;
