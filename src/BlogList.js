const BlogList = ({ blogs }) => {
  // const blogs = props.blogs;
  // console.log(props,blogs);
  return (
    <div className="blog-list">
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
