import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FiGithub, FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FiGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FiGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
