import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Suphakit Ranphol';
export const siteTitle = 'Portfolio Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio website showcasing skills and projects"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <p>Full Stack Developer</p>
            <div className={styles.skills}>
              <Image src="/icons/nextjs.svg" alt="Next.js" width={50} height={50} />
              <Image src="/icons/nuxtjs.svg" alt="Nuxt.js" width={50} height={50} />
              <Image src="/icons/python.svg" alt="Python" width={50} height={50} />
              <Image src="/icons/java.svg" alt="Java" width={50} height={50} />
              <Image src="/icons/docker.svg" alt="Docker" width={50} height={50} />
              <Image src="/icons/react.svg" alt="React.js" width={50} height={50} />
              <Image src="/icons/vuejs.svg" alt="Vue.js" width={50} height={50} />
              <Image src="/icons/expressjs.svg" alt="Express.js" width={50} height={50} />
              <Image src="/icons/postman.svg" alt="Postman" width={50} height={50} />
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
