import logo from './logo.jpg'
const Navbar = ({show}) => {
    console.log("Navbar prop type:", typeof show, show);
    return ( 
        <div className={show ? "sidenav active" : "sidenav"}>
            <img src={logo} alt='Logo' className='logo'/>
            <ul>
                <li>
                    <a href="/">Profile</a>
                </li>
                <li>
                    <a href="/">Article</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;