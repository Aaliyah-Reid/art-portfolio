import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className="mt-4 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-customMainTxt font-bold font-cooper-black text-2xl">
                    <Link to="/">AJLR</Link>
                </div>
                <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/about" className="text-customMainTxt hover:text-hoverText font-roboto-mono">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="text-customMainTxt hover:text-hoverText font-roboto-mono">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-customMainTxt hover:text-hoverText font-roboto-mono">Contact</Link>
                    </li>

                </ul>

                </nav>
            </div>
        </header>
        

    );
};


export default Header;