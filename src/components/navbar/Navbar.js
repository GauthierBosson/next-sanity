import { Flex, Skeleton } from "@chakra-ui/core";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { signOut } from "next-auth/client";

import Logo from "../../elements/logo/Logo";
import UserAvatar from "../../elements/userAvatar/UserAvatar";

const Navbar = () => {
  const [session, loading] = useSession();

  return (
    <nav>
      <Flex
        height="70px"
        maxW="80rem"
        m="0 auto"
        paddingX={3}
        align="center"
        justify="space-between"
      >
        <Logo />
        {loading ? (
          <Skeleton height="50px" width="50px" borderRadius="50%" />
        ) : session ? (
          <Flex align="center">
            <Link href="/profile">
              <a>
                <UserAvatar name={session.user.name} mr={3} />
              </a>
            </Link>
            <button onClick={signOut}>Signout</button>
          </Flex>
        ) : (
          <div>
            <Link href="/auth/signup">
              <a>Inscription</a>
            </Link>
            <Link href="/auth/signin">
              <a>Connexion</a>
            </Link>
          </div>
        )}
      </Flex>
    </nav>
  );
};

export default Navbar;