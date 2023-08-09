import Post from '@/components/Post';
import style from './Posts.module.css';

const Posts = () => (
  <div className={style.postscontainer}>
    <ul className={style.posts}>
      <li className={style.post}>
        <Post title="album: Hot Dog Album">
          <div>
            <iframe
              className="spotifyplayer"
              src="https://open.spotify.com/embed/album/6f0yBNF0JXx6w0CjRkcAks?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Post>
      </li>
      <li className={style.post}>
        <Post title="album: winter 2022 mixtape">
          <div>
            <iframe
              className="spotifyplayer"
              src="https://open.spotify.com/embed/album/2jvOoWjwlmTsh9TerPmOQx?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Post>
      </li>
      <li className={style.post}>
        <Post title="song: stay with me for tomorrow">
          <div>
            <iframe
              className="spotifyplayer"
              src="https://open.spotify.com/embed/track/33RFR9nMYO488YdfHxuenf?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </Post>
      </li>
      <li className={style.post}>
        <Post title="video: 2nd best hotdog i ever had">
          <div>
            <div className="embedwrapper">
              <iframe
                className="embed embed--smaller"
                width="1080"
                height="640"
                src="https://www.youtube.com/embed/Cn1r6caXyPQ"
                title="YouTube video player - 2nd Best Hotdog I Ever Had"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Post>
      </li>
      <li className={style.post}>
        <Post title="song: the more water you drink ft. probablyme">
          <div>
            <iframe
              className="spotifyplayer"
              src="https://open.spotify.com/embed/track/0Epk6WKtt4tsVen6cvqia2?utm_source=generator"
              width="100%"
              height="352"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Post>
      </li>
    </ul>
  </div>
);

export default Posts;
