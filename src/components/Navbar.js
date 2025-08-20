import logo from './logo.jpg'
import { IoHomeSharp } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { MdArticle } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = ({show}) => {
    console.log("Navbar prop type:", typeof show, show);
    return ( 
        <div className={show ? "sidenav active" : "sidenav"}>
            <img src={logo} alt='Logo' className='logo'/>
            <p>Mujadded Chowdhury</p>
            <p>mujaddedc@gmail.com</p>
            <ul>
                <li>
                    <Link to="/"><IoHomeSharp />Home</Link>
                </li>
                <li>
                    <Link to="/Profile"><GoPersonFill />Profile</Link>
                </li>
                <li>
                    <Link to="/Article"><MdArticle />Article</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;