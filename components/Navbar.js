import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link legacyBehavior href="/">
            <a className="navbar-brand">Ethereum Mongo DB</a>
        </Link>
        <Link legacyBehavior href="/new">
            <a className="create">Create Record</a>
        </Link>
    </nav>
)

export default Navbar;