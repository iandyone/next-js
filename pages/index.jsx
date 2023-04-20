import Heading from "@/components/heading";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.wrapper}>
       <Head>
        <title>Main</title>
      </Head>
      <Heading text='Hello, NEXT' />
    </div>
  );
};

export default Home;
