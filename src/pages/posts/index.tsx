import Head from 'next/head';
import styles from  './styles.module.scss';

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts · ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>11 abril 2022</time>

            <strong>Pellentesque non lacus vel</strong>

            <p>Nunc id congue nibh. Etiam nec porttitor dui, nec sagittis dui. Cras a semper ipsum. Duis eu enim mollis.</p>
          </a>

          <a href="#">
            <time>6 abril 2022</time>

            <strong>Aenean massa nibh fringilla</strong>

            <p>Suspendisse vel volutpat tellus, ac tristique risus. Proin elit mi, blandit ac arcu ut, fermentum vestibulum dolor. Etiam vestibulum.</p>
          </a>

          <a href="#">
            <time>1 abril 2022</time>

            <strong>Suspendisse viverra semper interdum</strong>

            <p>Cras scelerisque ante malesuada diam sagittis, nec aliquet massa porta. Praesent pulvinar quam magna, et ultrices mi lacinia eu.</p>
          </a>
        </div>
      </main>
    </>
  );
}