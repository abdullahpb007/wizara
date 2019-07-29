import "../assets/css/bootstrap.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/animate.css";

import { Preloader, Placeholder } from "react-preloading-screen";
import App, { Container } from "next/app";
import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>
            Wizara - Perfect Technology Partner For Your Software Engineering
          </title>
        </Head>
        <Preloader>
          <Component {...pageProps} />
          <GoTop scrollStepInPx="50" delayInMs="16.66" />
          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </Container>
    );
  }
}
