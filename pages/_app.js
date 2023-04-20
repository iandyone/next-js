import "@/styles/globals.scss";
import Layout from "@/components/layout";
import Image from "next/image";
import picture from "../public/test.jpg"

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image alt='img' src={picture} width={900} height={950} placeholder="blur" priority={false} /> */}
    </Layout>
  );
};

export default App;
