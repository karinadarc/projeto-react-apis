import { TypeImageStyle } from "./TypeImageStyle"
import { TypesColor } from "../../ColorCard/TypeColor"


const TypeImage = ({pokemonType}) =>{
    return(
        <TypeImageStyle
        src={TypesColor[pokemonType]}
        />
    )
}

export default TypeImage