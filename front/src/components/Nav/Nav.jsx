import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"






export default function NavBar({onSearch}) {
    return (
        <div className={style.navBarContariner}>
            <div className={style.botonesNav}>

                <Link to={'/home'}>
                    <button className={style.botones} >
                        <span>HOME</span>
                    </button>
                </Link>

                <Link to={'/favorites'}>
                    <button className={style.botones} >
                        <span>FAVORITES</span>
                    </button>
                </Link>

                <Link to={'/about'}>
                    <button className={style.botones} >
                        <span>ABOUT</span>
                    </button>
                </Link>
            </div>

            <SearchBar
                onSearch={onSearch} />
        </div>   
    )
}





{/* <button class="button-64" role="button"><span class="text">Button 64</span></button> */}

