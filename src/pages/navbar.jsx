import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/company">Company</Link>
            <Link to="/product">Product</Link>
            <Link to="/employee">Employee</Link>
        </nav>
    );
}
export default Navbar