import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-24 p-5 flex flex-wrap justify-between items-center">
            <div>
                <Link to="/">
                    <img src="src/assets/logo.svg" alt="Logo" width={101} height={60} />
                </Link>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
                <i
                    className="fa-solid fa-bars cursor-pointer text-3xl text-[#c412b5]"
                    onClick={handleMenuToggle}
                ></i>
            </div>

            <ul
                className={`fixed top-24 left-0 w-full bg-white md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
            >
                <li className="border-b">
                    <Link to="/home" className="block px-4 py-2">
                        Home
                    </Link>
                </li>
                <li className="border-b">
                    <Link to="/Browsebook" className="block px-4 py-2">
                        Browse Book
                    </Link>
                </li>
                <li>
                    <Link to="/Addbook" className="block px-4 py-2">
                        Add Book
                    </Link>
                </li>
            </ul>

            <ul className="hidden md:flex space-x-6 m-4">
                <li>
                    <Link to="/home" className="px-2">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Browsebook" className="px-2">
                        Browse Book
                    </Link>
                </li>
                <li>
                    <Link to="/Addbook" className="px-2">
                        Add Book
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
