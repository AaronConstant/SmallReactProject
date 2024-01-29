
function Header() { // Within the header we created a the elements we would like to be presented on the App.

    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href ="#"></a>Home</li>
                    <li><a href ="#"></a>About</li>
                    <li><a href ="#"></a>Services</li>
                    <li><a href ="#"></a>Contact</li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );

}

export default Header //exporting it so we can have it accessed in other components.
