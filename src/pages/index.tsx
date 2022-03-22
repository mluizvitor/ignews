import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
    interval: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home · ig.news</title>
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
            <span>
              for {product.amount} / {product.interval}
            </span>
          </p>

          <SubscribeButton priceId={product.priceId} />
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KddLGARklXdX0VjjpuKzVxY');

  const product = {
    priceId: price.id,

    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),

    interval: price.recurring.interval,
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
