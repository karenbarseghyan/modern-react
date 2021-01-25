import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "my", body: "atatta", author: "leo", id: 1 },
    { title: "your", body: "papapappa", author: "leonchik", id: 2 },
    { title: "their", body: "kakakkaa", author: "leo", id: 3 },
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blg) => blg.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    console.log("useEffect_run");
    // console.log(blogs);
  },[name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick = {()=> setName('luigi')}>Change The Name</button>
      <p>{name}</p>
      {/* <BlogList blogs={blogs.filter((blg)=>blg.author === 'leo') } title="Leos" /> */}
    </div>
  );
};

export default Home;
