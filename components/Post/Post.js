const Post = ({ title, children }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="post__content">{children}</div>
    </div>
  );
};

export default Post;
