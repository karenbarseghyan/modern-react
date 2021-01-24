import { useState } from "react";

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');

    const handleClick = () => {
       setName('luigi');
    }
    // const handleClickOnce = () => {
        // setName('pete');
    // }
    // const handleClickMeAgain = (name) => {
        // console.log("Hello " + name);
    // }
    return ( 
        <div className = 'home'>
            <h2>Home</h2> 
            <p>{name}</p>
            <button onClick= {handleClick}> Click me!</button>
            {/* <button onClick= {handleClickOnce}> Click me once more!</button> */}
            {/* <button onClick = {()=> {handleClickMeAgain('Karen')}}>Click me Again!</button> */}
        </div>
    );
}
 
export default Home;