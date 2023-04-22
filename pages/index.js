import Head from 'next/head';
import Footer from '@/components/Footer';
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
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.description}>
            <h1 className={styles.rotate}>im coolin</h1>
            <div>
              <h2>New releases</h2>
              <div>
                <div className={styles.embedwrapper}>
                  <iframe
                    className={styles.embed}
                    width="1080"
                    height="640"
                    src="https://www.youtube.com/embed/AfcgKfDmyHY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <h2>Music</h2>
              <p>🌭</p>
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
              <div>
                <iframe
                  className={styles.spotifyplayer}
                  src="https://open.spotify.com/embed/album/6f0yBNF0JXx6w0CjRkcAks?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div>
                <iframe
                  className={styles.spotifyplayer}
                  src="https://open.spotify.com/embed/album/2jvOoWjwlmTsh9TerPmOQx?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
