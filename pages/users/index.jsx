import { useEffect } from "react";

import Heading from "@/components/heading";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/User.module.scss";

export async function getStaticProps(context) {
  console.log(context);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  if (!users.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users,
    },
  };
}

const Users = ({ users }) => {
  const router = useRouter();

  function handlerOnClick(id) {
    router.push(`./users/user/${id}`);
  }

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Heading tag={"h1"} text={"Users page"} />
      {users && users.map((user) => {
          return (
            <div key={user.id} onClick={() => handlerOnClick(user.id)} className={styles.user}>
              {user.id}. {user.name}
            </div>
          );
        })}
    </>
  );
};

export default Users;
