import { BrowserRouter,Route,Routes } from "react-router-dom"
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../Pages/ErrorPage.js/ErrorPage";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<PokemonsListPage/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="detail/:id" element={<PokemonDetailPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Router;