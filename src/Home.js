import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'my', body: 'atatta', author:'leo', id:1},
        {title: 'your', body: 'papapappa', author:'leos', id:2},
        {title: 'their', body: 'kakakkaa', author:'leonchik', id:3},

    ])
    return (
        <div className = 'home'>   
            <BlogList blogs = {blogs} />
        </div>
    );
}
 
export default Home;