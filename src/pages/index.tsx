import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início · ig.news</title>
      </Head>

      <main className={styles.containerContent}>
        <section className={styles.hero}>
          <span>👏 Hey, wellcome!</span>

          <h1>
            News about <br />
            the <span>React</span> world
          </h1>

          <p>
            Get access to the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar-m.svg"
          alt="Girl coding"
          height="520"
          width="334"
        />
      </main>
    </>
  );
}
