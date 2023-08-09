import Head from 'next/head';
import Footer from '@/components/Footer';
import Posts from '@/components/Posts';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>I.M. Coolin</title>
        <meta name="description" content="im coolin, we coolin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.innermain}>
            <h1 className="iced-container">
              <span className="iced iced1">im coolin</span>
              <span className="iced iced2">im coolin</span>
            </h1>
            <div>
              <section>
                <h2 className="slide">New releases</h2>
                <div>
                  <div className="embedwrapper">
                    <iframe
                      className="embed"
                      width="1080"
                      height="640"
                      src="https://www.youtube.com/embed/AfcgKfDmyHY"
                      title="YouTube video player - How to Pronounce Josh"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </section>
              <section>
                <h2>Music</h2>
                <p>🌭</p>
                <ul className="tiles-list">
                  <li>
                    <a
                      href="https://open.spotify.com/artist/2qhMtfnr8SEXWxC4gSUEmP?si=Dq_zoy2zSHuov4qSfvtJNg"
                      target="_blank"
                      rel="noopener nofollow"
                      title="IM Coolin Spotify"
                    >
                      Spotify
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCaym_oet1bCREewPhrINbLw"
                      target="_blank"
                      rel="noopener nofollow"
                      title="IM Coolin YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </section>
              <section>
                <Posts />
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
