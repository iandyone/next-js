// getServerSideProps - SSR для динамических страниц

import Heading from "@/components/heading";
import User from "../../../components/user";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
}

const User1 = ({ user }) => {
 console.log(user);

  return (
    <>
      <Heading text={user.name}/>
      <User user={user}/>
    </>
  );
};

export default User1;
