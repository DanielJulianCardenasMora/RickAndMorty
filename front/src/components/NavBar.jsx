import SearchBar from "./SearchBar";








export default function NavBar({onSearch}) {
    return (
        <div className='navBarContariner'>
            <SearchBar
                onSearch={onSearch} />
        </div>   
    )
}







