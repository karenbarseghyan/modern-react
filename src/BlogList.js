const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // console.log(props,blogs);
  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blogs.map((blg) => (
        <div className="blog-preview" key={blg.id}>
          <h1>{blg.title}</h1>
          <p>{blg.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
