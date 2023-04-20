import Heading from "@/components/heading";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Error = () => {
  const router = useRouter();
  const redirectTimer = 5;
  const [timer, setTimer] = useState(redirectTimer);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1010);
  },[timer]);

  useEffect(() => {
    setTimeout(() => router.push("/"), redirectTimer * 1000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text={"Error"} />
      <Heading tag={"h2"} text={"Something went wrong"} />
      <Heading tag={"h3"} text={`Redirecting to the main page after ${timer} seconds...`} />
    </>
  );
};

export default Error;
