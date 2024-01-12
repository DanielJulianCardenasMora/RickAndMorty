import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"






export default function NavBar({onSearch}) {
    return (
        <div style={{ backgroundColor: "lightgray", display: 'flex', width: '700px', justifyContent: "space-evenly", padding: '15px'}} className={style.navBarContariner}>
            <div className="botonesNav">

                <button>
                    <Link to={'/home'}>Home</Link>
                </button>

                <button>
                    <Link to={'/about'}>About</Link>
                </button>
            </div>

            <SearchBar
                onSearch={onSearch} />
        </div>   
    )
}







