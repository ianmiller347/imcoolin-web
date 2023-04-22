import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>I.M. Coolin</title>
        <meta name="description" content="im coolin we coolin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.rotate}>im coolin</h1>
          <div>
            <h2>New releases</h2>
            <div>
              <iframe
                width="1080"
                height="640"
                src="https://www.youtube.com/embed/AfcgKfDmyHY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <h2>Music</h2>
            <p>
              <a
                href="https://open.spotify.com/artist/2qhMtfnr8SEXWxC4gSUEmP?si=Dq_zoy2zSHuov4qSfvtJNg"
                target="_blank"
                rel="noopener nofollow"
                title="IM Coolin Spotify"
              >
                Spotify
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/channel/UCaym_oet1bCREewPhrINbLw"
                target="_blank"
                rel="noopener nofollow"
                title="IM Coolin YouTube"
              >
                YouTube
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
