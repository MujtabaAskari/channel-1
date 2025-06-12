import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <nav>
            <ul>
                <li><Link to='/company' >Company</Link> </li>
                <li><Link to='/product' >Product</Link> </li>
                <li><Link to='/employee' >Employee</Link> </li>
            </ul>
        </nav>
        <Outlet />

    </>
}

export default Layout;