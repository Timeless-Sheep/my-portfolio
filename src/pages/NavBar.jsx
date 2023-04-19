import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NavBar = () => {
useEffect(() => {
    const header = document.querySelector("header");
    const sticky = header.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }

    window.onscroll = function() {myFunction()};
}, []);

return (
    <header>
    <nav className='nav'>
        <ul>
        <li>
            <i className="logo">P4USEBR3AK</i>
        </li>
        <li>
            <Link to="/"><i className="/">Home</i></Link>
        </li>
        <li>
            <Link to="/about"><i className="/">About</i></Link>
        </li>
        <li>
            <Link to="/gallery"><i className="/">Gallery</i></Link>
        </li>
        </ul>
    </nav>
    </header>
);
};

export default NavBar;

