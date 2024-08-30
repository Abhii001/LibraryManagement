import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-full h-24 p-5 flex flex-wrap justify-between items-center">
            <div>
                <Link to="/">
                    <img src="src/assets/logo.svg" alt="Logo" width={101} height={60} />
                </Link>
            </div>
            <ul className="flex space-x-6 m-4">
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
}

export default Header;
