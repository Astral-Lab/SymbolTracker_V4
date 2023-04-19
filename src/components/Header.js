import { Link } from 'react-router-dom';

const Header = () => {
    console.log("Header Re-render triggered!")
    return (
        <header className="w-full h-16 bg-black flex justify-center items-center text-3xl text-white font-semibold tracking-wider mb-8">
            <Link to="/">
                <h1>Symbol Tracker</h1>
            </Link>
        </header>
    )
};

export default Header;