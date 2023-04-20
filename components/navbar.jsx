import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Users", path: "/users" },
    { id: 4, title: "404", path: "/qwerty" },
  ];

  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className={styles.links}>
        {navigation.map((link) => {
          return (
            <Link href={link.path} key={link.id} className={pathname === link.path ? styles.active : ""}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
