import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my", body: "atatta", author: "leo", id: 1 },
    { title: "your", body: "papapappa", author: "leonchik", id: 2 },
    { title: "their", body: "kakakkaa", author: "leo", id: 3 },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList blogs={blogs.filter((blg)=>blg.author = 'leo') } title="Leos" />
    </div>
  );
};

export default Home;
