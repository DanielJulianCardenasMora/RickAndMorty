import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"






export default function NavBar({onSearch}) {
    return (
        <div className={style.navBarContariner}>
            <div className={style.botonesNav}>

                <button className={style.botones} ><span class="text">
                    <Link to={'/home'}>Home</Link></span>
                </button>

                <button className={style.botones} ><span class="text">
                    <Link to={'/about'}>About</Link></span>
                </button>
            </div>

            <SearchBar
                onSearch={onSearch} />
        </div>   
    )
}





{/* <button class="button-64" role="button"><span class="text">Button 64</span></button> */}

