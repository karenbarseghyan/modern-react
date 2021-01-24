const Home = () => {
    const handleClick = (click) => {
        console.log("clicked");
    }

    const handleClickMeAgain = (name) => {
        console.log("Hello " + name);
    }
    return ( 
        <div className = 'home'>
            <h2>Home</h2>
            <button onClick= {handleClick}> Click me!</button>
            <button onClick = {()=> {handleClickMeAgain('Karen')}}>Click me Again!</button>
        </div>
    );
}
 
export default Home;