import { useState } from "react";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'my', body: 'atatta', author:'leo', id:1},
        {title: 'your', body: 'papapappa', author:'leos', id:2},
        {title: 'their', body: 'kakakkaa', author:'leonchik', id:3},

    ])
    return (
        <div className = 'home'>
            {blogs.map((blg)=> (
            <div className = "blog-preview" key = {blg.id}>
                <h1>{blg.title}</h1>
                <p>{blg.author}</p>
            </div>
            ))}
        </div>
    );
}
 
export default Home;