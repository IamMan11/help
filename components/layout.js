import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

const name = 'Puntakorn Maikampange';
const siteTitle = 'My Portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Portfolio showcasing my skills and projects" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg" // Profile image
              className={styles.profileImage}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={styles.heading}>{name}</h1>
            <p>Full Stack Developer</p>
            
            {/* Skills Icons */}
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
            
            {/* GIF Images */}
            <div className={styles.photo}>
              <Image src="/images/photo1.gif" alt="Photo 1" width={200} height={200} />
              <Image src="/images/photo2.gif" alt="Photo 2" width={200} height={200} />
              <Image src="/images/photo3.gif" alt="Photo 3" width={200} height={200} />
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={styles.profileImage}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={styles.subheading}>
              <Link href="/" className={styles.link}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
